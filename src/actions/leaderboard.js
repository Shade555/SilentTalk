"use server";

import { db } from "@/lib/prisma";

export async function getLeaderboard() {
  try {
    const leaderboard = await db.moduleCompletion.groupBy({
      by: ['userId'],
      _sum: {
        points: true,
      },
      orderBy: {
        _sum: {
          points: 'desc',
        },
      },
      take: 10,
    });

    // Fetch user names for the leaderboard
    const userIds = leaderboard.map(entry => entry.userId);
    const users = await db.user.findMany({
      where: {
        id: {
          in: userIds,
        },
      },
      select: {
        id: true,
        name: true,
      },
    });

    // Combine points with user names
    const leaderboardWithNames = leaderboard.map(entry => {
      const user = users.find(u => u.id === entry.userId);
      return {
        name: user?.name || 'Anonymous',
        points: entry._sum.points || 0,
      };
    });

    return leaderboardWithNames;
  } catch (error) {
    console.error("❌ Leaderboard Error:", error);
    throw error;
  }
}
