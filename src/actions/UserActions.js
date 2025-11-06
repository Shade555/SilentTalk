"use server";

import { db } from "@/lib/prisma";

export async function getUserIdByClerkId(clerkUserId) {

  // --- THIS IS THE LINE WE NEED ---
  console.log("SERVER ACTION IS USING DATABASE_URL:", process.env.DATABASE_URL);
  // ---

  console.log("🔍 Fetching user for clerkUserId:", clerkUserId);
  try {
    const user = await db.user.findUnique({
      where: { clerkId: clerkUserId },
      select: { id: true },
    });
    console.log("✅ Found user:", user);
    return user ? user.id : null;
  } catch (error) {
    console.error("❌ Prisma Error:", error);
    throw error;
  }
}