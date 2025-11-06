"use server";
import { db } from "@/lib/prisma";

// Save user activity
export async function logUserActivity(userId, minutes, description = "Study session") {
  await db.activityLog.create({
    data: {
      userId: userId,
      minutes,
      description
    },
  });
}

export async function logChapterCompletion(userId, chapterId, chapterTitle) {
  return await db.activityLog.create({
    data: {
      userId: userId,
      minutes: 30, // 30 min per chapter
      description: `Completed ${chapterTitle}`,
      date: new Date(),
    },
  });
}

// Fetch aggregated activity data
export async function getDailyActivity(userId, range = "30d") {
  const days = parseInt(range.replace("d", "")) || 30;
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - days);

  const logs = await db.activityLog.findMany({
    where: {
      userId: userId,
      date: { gte: startDate },
    },
    orderBy: { date: "desc" },
  });

  // Group by date and return as array with 'date' and 'count' (changed from minutes to count for consistency with chart)
  const grouped = logs.reduce((acc, log) => {
    const dateKey = log.date.toISOString().split("T")[0];
    if (!acc[dateKey]) {
      acc[dateKey] = { date: dateKey, count: 0 };
    }
    acc[dateKey].count += 1; // Count activities per day instead of summing minutes
    return acc;
  }, {});

  return Object.values(grouped);
}
