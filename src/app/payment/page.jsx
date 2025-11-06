"use client";
import { useState, useMemo } from "react";
import { Sparkles, ShieldCheck, Clock, Crown } from "lucide-react";
import CheckoutButton from "@/components/CheckoutButtons";
import { useUser } from "@clerk/clerk-react";

// Quick pricing table (display only). Backend still derives price by plan+currency.
const PRICING = {
    INR: {
        monthly: 399,
        quarterly: 999,
        yearly: 3799,
    },
    USD: {
        monthly: 9,
        quarterly: 24,
        yearly: 72,
    },
};

const FEATURES_BASE = [
    { icon: <Sparkles className="size-4 text-accent1" />, text: "Interactive ASL lessons" },
    { icon: <Clock className="size-4 text-accent1" />, text: "Progress tracking" },
    { icon: <ShieldCheck className="size-4 text-accent1" />, text: "Secure payment" },
];

const PLAN_EXTRA = {
    monthly: ["Access to all beginner modules"],
    quarterly: ["Everything in Monthly", "Intermediate modules unlocked", "Priority lesson updates"],
    yearly: ["All features unlocked", "Advanced content", "Exclusive badges & streak boosts", "Best value savings"],
};

export default function PaymentPage() {
    // Always call hooks in the same order on every render.
    const { isLoaded, isSignedIn, user } = useUser();
    const [currency, setCurrency] = useState("INR");
    const [billingFocus, setBillingFocus] = useState("monthly");
    const displayPlans = useMemo(
        () => [
            { name: "Monthly", key: "monthly", highlight: false },
            { name: "Quarterly", key: "quarterly", highlight: false },
            { name: "Yearly", key: "yearly", highlight: true },
        ],
        []
    );
    const userId = user ? user.id : null;

    // Conditional UI AFTER all hooks.
    if (!isLoaded) {
        return (
            <main className="min-h-screen flex items-center justify-center bg-[url(/asset/bgwaves.png)] bg-cover bg-center">
                <div className="backdrop-blur-md bg-black/40 px-6 py-4 rounded-xl text-white text-sm">Loading...</div>
            </main>
        );
    }
    if (!isSignedIn) {
        return (
            <main className="min-h-screen flex items-center justify-center bg-[url(/asset/bgwaves.png)] bg-cover bg-center">
                <div className="backdrop-blur-md bg-black/40 px-6 py-5 rounded-xl text-white text-center space-y-2">
                    <p className="text-lg font-semibold">Sign in required</p>
                    <p className="text-xs text-gray-200 max-w-xs">Please sign in to view subscription plans.</p>
                </div>
            </main>
        );
    }

    const formatPrice = (planKey) => {
        const value = PRICING[currency][planKey];
        return currency === "INR" ? `₹${value}` : `$${value}`;
    };

    return (
        <main className="relative min-h-screen w-full bg-[url(/asset/bgwaves.png)] bg-cover bg-center">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Header / Intro */}
                <section className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                        Elevate Your <span className="text-accent1">ASL Journey</span>
                    </h1>
                    <p className="mt-4 text-base sm:text-lg text-gray-200">
                        Choose a plan that fits your pace. Learn, practice, and master sign language with structured progress and engaging modules.
                    </p>

                    {/* Currency Toggle */}
                    <div className="mt-8 inline-flex p-1 rounded-full bg-white/10 ring-1 ring-white/15 backdrop-blur-md">
                        {["INR", "USD"].map((c) => (
                            <button
                                key={c}
                                onClick={() => setCurrency(c)}
                                className={`px-5 py-2 text-sm font-medium rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent1/70 ${currency === c
                                        ? "bg-gradient-to-r from-[#063731] to-[#3DDC97] text-white shadow"
                                        : "text-gray-200 hover:text-white"
                                    }`}
                                aria-pressed={currency === c}
                            >
                                {c}
                            </button>
                        ))}
                    </div>
                </section>

                {/* Pricing Grid */}
                <section className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {displayPlans.map((plan) => {
                        const isActive = billingFocus === plan.key;
                        const isHighlight = plan.highlight;
                        return (
                            <div
                                key={plan.key}
                                className={`relative group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md flex flex-col overflow-hidden shadow-md transition-all ${isHighlight
                                        ? "ring-2 ring-[#3DDC97]/70 shadow-lg"
                                        : "hover:shadow-lg hover:ring-1 hover:ring-[#3DDC97]/40"
                                    }`}
                                onMouseEnter={() => setBillingFocus(plan.key)}
                            >
                                {isHighlight && (
                                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#063731] via-[#3DDC97] to-[#063731]" />
                                )}
                                <div className="p-6 flex flex-col flex-1">
                                    <div className="flex items-center justify-between">
                                        <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                                            {plan.name}
                                            {isHighlight && <Crown className="size-5 text-[#3DDC97]" />}
                                        </h2>
                                        <span className={`text-xs px-2 py-1 rounded-md tracking-wide ${isHighlight
                                                ? "bg-[#3DDC97]/20 text-[#3DDC97]"
                                                : isActive
                                                    ? "bg-[#063731]/30 text-[#3DDC97]"
                                                    : "bg-white/10 text-gray-300"
                                            }`}>{isHighlight ? "Best Value" : isActive ? "Focused" : ""}</span>
                                    </div>
                                    <div className="mt-4">
                                        <div className="flex items-end gap-2">
                                            <p className="text-4xl font-bold text-white">
                                                {formatPrice(plan.key)}
                                            </p>
                                            <span className="text-gray-300 text-sm mb-1">/{plan.key === "monthly" ? "mo" : plan.key === "quarterly" ? "qtr" : "yr"}</span>
                                        </div>
                                    </div>

                                    {/* Feature List */}
                                    <ul className="mt-6 space-y-2 text-sm text-gray-200">
                                        {FEATURES_BASE.map((f, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                {f.icon}
                                                <span>{f.text}</span>
                                            </li>
                                        ))}
                                        {PLAN_EXTRA[plan.key].map((line, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span className="mt-1 block size-2 rounded-full bg-[#3DDC97]" />
                                                <span>{line}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-8 flex-1 flex items-end">
                                        <CheckoutButton userId={userId} plan={plan.key} currency={currency} />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </section>

                {/* Guarantee / Notes */}
                <section className="mt-16 max-w-4xl mx-auto text-center text-gray-200 text-sm leading-relaxed">
                    <p>
                        Secure payments are processed via Stripe. You can switch or cancel your subscription anytime. Prices shown are for illustration; the final amount is determined server-side by plan & currency.
                    </p>
                    <p className="mt-4 italic text-gray-300">
                        Need a team / educational license? <a className="underline decoration-dotted hover:text-white" href="/contact">Contact us</a>.
                    </p>
                </section>
            </div>
        </main>
    );
}
