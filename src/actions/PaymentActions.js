"use server";

import Stripe from "stripe";
import { db } from "@/lib/prisma";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function confirmPayment(sessionId, clerkId) {
    // Get internal user
    const internalUser = await db.user.findUnique({ where: { clerkId } });
    if (!internalUser) return null;

    // Fetch Stripe session
    const session = await stripe.checkout.sessions.retrieve(sessionId, { expand: ["line_items"] });
    const paid = session.payment_status === "paid" || session.status === "complete";

    // Check if transaction exists
    let transaction = await db.transaction.findFirst({ where: { stripeSession: sessionId } });

    // If paid and no transaction, record it
    if (paid && !transaction) {
        const plan = session.metadata.plan || "unknown";
        const amountMinor = session.amount_total || 0;
        let endDate = new Date();
        if (plan === "monthly") endDate.setMonth(endDate.getMonth() + 1);
        else if (plan === "quarterly") endDate.setMonth(endDate.getMonth() + 3);
        else if (plan === "yearly") endDate.setFullYear(endDate.getFullYear() + 1);

        transaction = await db.transaction.create({
            data: {
                userId: internalUser.id,
                amount: amountMinor / 100,
                currency: session.currency.toUpperCase(),
                stripeSession: sessionId,
                plan,
                startDate: new Date(),
                endDate,
                status: "success",
            },
        });
    }

    return {
        transaction,
        isConfirmed: paid,
    };
}

// Required
export async function getUserTransactions(userId) {
    try {
        const transactions = await db.transaction.findMany({
            where: { userId },
        });
        return transactions;
    } catch (error) {
        console.error("Error fetching transactions:", error);
        throw new Error("Could not fetch transactions");
    }
}

export async function getActiveSubscription(userId) {
    const now = new Date();
    const subscription = await db.transaction.findFirst({
        where: {
            userId,
            status: "success",
            endDate: { gte: now },
        },
        orderBy: { endDate: "desc" },
    });
    return subscription;
}

// Latest transaction (success or otherwise)
export async function getLatestTransaction(userId) {
    return await db.transaction.findFirst({
        where: { userId },
        orderBy: { createdAt: 'desc' },
    });
}

export async function isSubscriptionActive(userId) {
    const now = new Date();
    const active = await db.transaction.findFirst({
        where: { userId, status: 'success', endDate: { gte: now } },
        orderBy: { endDate: 'desc' },
    });
    return !!active;
}

export async function getSubscriptionDetails(userId) {
    try {
        const latestTransaction = await getLatestTransaction(userId);
        if (!latestTransaction) return null;

        const isActive = await isSubscriptionActive(userId);
        return {
            isActive,
            startDate: latestTransaction.startDate,
            endDate: latestTransaction.endDate,
        };
    } catch (error) {
        console.error("Error fetching subscription details:", error);
        throw new Error("Could not fetch subscription details");
    }
}

export async function cancelSubscription(userId) {
    try {
        const latestTransaction = await getLatestTransaction(userId);
        if (!latestTransaction) {
            throw new Error("No active subscription found");
        }
        await db.transaction.update({
            where: { id: latestTransaction.id },
            data: { endDate: new Date() },
        });
        return true;
    } catch (error) {
        console.error("Error cancelling subscription:", error);
        throw new Error("Could not cancel subscription");
    }
}
