"use client";
import { UserProfile } from "@clerk/nextjs";
import BottomNavbar from "@/components/bottomnavbar";
export default function UserPage() {
  return (
    <section className="min-h-screen pt-10 px-4 space-y-10">
    <div className="bg-foreground text-accent2 flex justify-center items-start pt-10 min-h-screen">
      <UserProfile routing="hash"/>
      
    </div>
    <BottomNavbar/>
    </section>

  );
}
