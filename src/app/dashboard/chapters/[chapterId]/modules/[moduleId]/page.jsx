"use client";

import { use, Suspense } from "react";
import { chapterMap } from "@/data/chapterDetails";
import { useUser } from "@clerk/nextjs";
import { LoaderCircle } from "lucide-react";
import LearningCard from "./_components/LearningCard";
import DialogueCard from "./_components/DialogueCard";
import TestingCard from "./_components/TestingCard";

export default function ModulePage({ params }) {

  //1. Clerk Auth
  const { isLoaded, isSignedIn, user } = useUser();
  if (!isLoaded || !isSignedIn) return null;

  //2. Get Params
  const { chapterId, moduleId } = use(params);

  //3. Validate Chapter
  const chapter = chapterMap[chapterId];
  if (!chapter) {
    return (
      <div className="p-4 sm:p-6 text-red-500 bg-[#0A0A10] text-sm sm:text-base">
        Chapter not found
      </div>
    );
  }

  //4. Validate Module
  const module = chapter.modules.find((m) => m.id === moduleId);
  if (!module) {
    return (
      <div className="p-4 sm:p-6 text-red-500 bg-[#0A0A10] text-sm sm:text-base">
        Module not found
      </div>
    );
  }

  //5. Render Module Based on Type
  return (
    <div className="min-h-screen p-4 sm:p-6 flex flex-col items-center bg-[#1E2235] text-[#D4D4D4]">

      {/* Render according to type */}
      <Suspense fallback={<LoaderCircle />}>
        {module?.type && module.type === "learning" && <LearningCard module={module} user={user} chapter={chapter} />}
        {module?.type && module.type === "dialogue" && <DialogueCard module={module} user={user} chapter={chapter} />}
        {module?.type && module.type === "test" && <TestingCard module={module} user={user} chapter={chapter} />}
      </Suspense>
    </div>
  );
}
