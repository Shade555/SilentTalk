"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Headerfordash from "@/components/Headerfordash";
import { getDailyActivity } from "@/actions/activity";
import { getLeaderboard } from "@/actions/leaderboard";
import { useUser } from "@clerk/nextjs";
import { getUserIdByClerkId } from "@/actions/UserActions";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import "react-calendar/dist/Calendar.css";

const Calendar = dynamic(() => import("react-calendar"), { ssr: false });

export default function Dashboard() {
  const { user } = useUser();
  const [userId, setUserId] = useState(null);
  const [activityData, setActivityData] = useState([]);
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    if (user) {
      async function fetchUserId() {
        const id = await getUserIdByClerkId(user.id);
        setUserId(id);
      }
      fetchUserId();
    }
  }, [user]);

  useEffect(() => {
    if (!userId) return;
    async function fetchData() {
      setLoading(true);
      const [activity, leaders] = await Promise.all([
        getDailyActivity(userId, "30d"),
        getLeaderboard(),
      ]);
      setActivityData(activity);
      setLeaderboard(leaders);
      setLoading(false);
    }
    fetchData();
  }, [userId]);

  const activeDates = new Set(activityData.map((d) => d.date));

  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      const formatted = date.toISOString().split("T")[0];
      if (activeDates.has(formatted)) {
        return "text-white bg-foreground font-bold rounded-full hover:scale-110 transition-all";
      }
    }
    return "";
  };

  return (
    <section>
      <Headerfordash />
      <div className="flex flex-col md:flex-row  gap-4 p-4 h-fit  bg-background">
        
        {/* Calendar */}
        <Card className="w-full bg-accent2 md:w-1/3">
          <CardHeader>
            <CardTitle className="text-2xl">Study Days Overview</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-8">Loading calendar...</div>
            ) : (
              <Calendar
                className="border-8 border-black rounded-2xl p-2 shadow-[0_0_30px_rgb(8, 17, 27)]  text-blue-950"
                onChange={setValue}
                value={value}
                tileClassName={tileClassName}
              />
            )}
          </CardContent>
        </Card>

        {/* Leaderboard */}
        <Card className="w-full bg-accent2 md:w-1/3">
          <CardHeader>
            <CardTitle className="text-2xl">Top Learners</CardTitle>
          </CardHeader>
          <CardContent>
            {leaderboard.length === 0 ? (
              <p className="text-background">No leaderboard data yet.</p>
            ) : (
              <ul className="space-y-2">
                {leaderboard.map((user, i) => (
                  <li key={i} className="flex justify-between p-2 bg-blue-900/50 rounded-lg">
                    <span>
                      {i + 1}. {user.name}
                    </span>
                    <span className="font-bold text-emerald-400">{user.points} pts</span>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Bar Chart */}
      <Card className=" bg-accent2 m-4">
        <CardHeader>
          <CardTitle className="text-2xl">Activity Frequency</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="text-center py-8">Loading chart...</div>
          ) : (
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={activityData}>
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#10b981" />
              </BarChart>
            </ResponsiveContainer>
          )}
        </CardContent>
      </Card>
    </section>
  );
}
