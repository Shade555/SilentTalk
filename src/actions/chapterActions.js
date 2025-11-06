"use server";

import { db } from "@/lib/prisma";
import { logChapterCompletion } from "@/actions/activity"; 

export async function chapterCompleted(userId, chapterId) {
    try {
        const completion = await db.chapterCompletion.upsert({
            where: {
                userId_chapterId: {
                    userId,
                    chapterId,
                },
            },
            update: {}, // nothing to update
            create: {
                userId,
                chapterId,
            },
        });

        // 🎯 ADD THIS: Log activity for streak calendar
        await logChapterCompletion(userId, chapterId, `Chapter ${chapterId}`);

        return true;
    } catch (error) {
        console.error("Error completing chapter details in table chapter_completions:", error);
        return false;
    }
}

// Rest of your code stays the same...
export async function getChapterCompletionDetails(userId) {
    try {
        const completions = await db.chapterCompletion.findMany({
            where: {
                userId,
            },
            select: {
                chapterId: true,
                completedAt: true,
            },
            orderBy: {
                completedAt: "asc",
            },
        });
        return completions;
    } catch (error) {
        console.error(
            "Error fetching chapter completion details from table chapter_completions:",
            error
        );
        return [];
    }
}

export async function getTotalChaptersCompleted(userId) {
    try {
        const count = await db.chapterCompletion.count({
            where: { userId },
        });
        return count;
    } catch (error) {
        console.error("Error counting completed chapters:", error);
        return 0;
    }
}