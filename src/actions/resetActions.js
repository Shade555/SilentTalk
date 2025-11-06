"use server";

import { db } from "@/lib/prisma";

// User Can Reset its Progress
export async function ResetProgress(userId) {
    try {
        const isUserIdValid = await db.user.findUnique({
            where: { id: userId },
        });

        if (!isUserIdValid) {
            throw new Error("Invalid user ID");
        }

        // Reset user progress logic here
        await db.$transaction([
            db.moduleCompletion.deleteMany({
                where: { userId },
            }),
            db.chapterCompletion.deleteMany({
                where: { userId },
            }),
        ]);
    } catch (error) {
        console.error("Error resetting progress:", error);
        throw new Error("Failed to reset progress");
    }
};



