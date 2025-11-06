"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { moduleCompleted } from "@/actions/moduleActions.js";
import { chapterCompleted } from "@/actions/chapterActions.js";
import { getUserIdByClerkId } from "@/actions/UserActions.js";
import TestingStepCard from "@/components/Modules/TestingStepCard.jsx";
import { toast } from "sonner";

const TestingCard = ({ module, user, chapter }) => {
  const router = useRouter();
  const [stepIndex, setStepIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);

  const calculatePercentage = () => {
    const total = correctCount + wrongCount;
    if (!total) return 0;
    return Math.round((correctCount / total) * 100);
  };

  const handleNext = async () => {
    if (stepIndex < module.steps.length - 1) {
      setStepIndex((prev) => prev + 1);
      return;
    }

    setShowResult(true);

    try {
      const clerkUserId = user.id;
      const userId = await getUserIdByClerkId(clerkUserId);

      await moduleCompleted(userId, chapter.id, module.id);

      setTimeout(async () => {
        const lastModuleId = chapter.modules[chapter.modules.length - 1].id;
        if (module.id === lastModuleId) {
          await chapterCompleted(userId, chapter.id);
          toast.success(`🎉 You completed the whole ${chapter.title} Chapter!`);
          router.push(`/dashboard`);
        } else {
          router.push(`/dashboard/chapters/${chapter.id}`);
        }
      }, 8000);
    } catch (error) {
      console.error("Error completing test:", error);
      toast.error("⚠️ Something went wrong. Please try again.");
    }
  };

  return (
    <div className="py-6">
      {showResult && (
        <div className="fixed inset-0 bg-black/80 flex flex-col items-center justify-center z-50 text-white">
          <div className="bg-[#1E2235] p-6 rounded-2xl shadow-xl text-center">
            <h2 className="text-2xl font-bold text-amber-400 mb-4">
              Test Completed 🎉
            </h2>
            <p className="text-lg">Marks: {correctCount * 2}</p>
            <p className="text-emerald-400">Correct: {correctCount}</p>
            <p className="text-red-400">Wrong: {wrongCount}</p>
            <p className="text-amber-400">
              Percentage Correct: {calculatePercentage()}%
            </p>
            <p className="mt-3 text-sm text-gray-400">
              Redirecting in 8 seconds...
            </p>
          </div>
        </div>
      )}

      <div className="max-w-3xl mx-auto p-1 space-y-6">
        <TestingStepCard
          key={module.steps[stepIndex].id}
          step={module.steps[stepIndex]}
          onStepComplete={handleNext}
          onSetCorrectCount={setCorrectCount}
          onSetWrongCount={setWrongCount}
        />
      </div>
    </div>
  );
};

export default TestingCard;
