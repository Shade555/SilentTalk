"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { moduleCompleted } from "@/actions/moduleActions.js";
import { chapterCompleted } from "@/actions/chapterActions.js";
import { getUserIdByClerkId } from "@/actions/UserActions.js";
import DialogueStepCard from "@/components/Modules/DialogueStepCard.jsx";
import { toast } from "sonner";
import { LoaderCircle } from "lucide-react";
import ExitLearning from "@/components/ExitLearning";

const DialogueCard = ({ module, user, chapter }) => {
  const router = useRouter();
  const [stepIndex, setStepIndex] = useState(0);
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleNext = async () => {
    // ✅ If not last step, just go to next conversation
    console.log("Current Step Index:", stepIndex);
    if (stepIndex < module.steps.length - 1) {
      setStepIndex((prev) => prev + 1);
      return;
    }

    // ✅ If last step completed → then mark module completed
    try {
      const clerkUserId = user.id;
      const userId = await getUserIdByClerkId(clerkUserId);

      const success = await moduleCompleted(userId, chapter.id, module.id);

      if (success) {
        toast.success(`🎉 You completed the Module: ${module.id}`);

        // If this is the last module of the chapter → mark chapter complete
        const lastModuleId = chapter.modules[chapter.modules.length - 1].id;
        if (module.id === lastModuleId) {
          await chapterCompleted(userId, chapter.id);
          toast.success(`🎉 You completed the whole ${chapter.title} Chapter!`);
          setIsRedirecting(true);
          router.push(`/dashboard`);
          return;
        }

        // else → back to chapter list
        setIsRedirecting(true);
        router.push(`/dashboard/chapters/${chapter.id}`);
      } else {
        toast.error(`❌ Failed to complete ${module.title} Module.`);
        router.push(`/dashboard/chapters/${chapter.id}`);
      }
    } catch (error) {
      console.error("Error completing module:", error);
      toast.error("⚠️ Something went wrong. Please try again.");
    }
  };

  return (
    <div className="py-6">
      {/* Redirecting Overlay */}
      {isRedirecting && (
        <div className="fixed inset-0 bg-black/60 flex flex-col items-center justify-center z-50">
          <LoaderCircle className="animate-spin text-amber-400 w-12 h-12 mb-4" />
          <p className="text-white text-lg sm:text-xl font-semibold">Redirecting...</p>
        </div>
      )}

      <div className="max-w-3xl mx-auto p-2 space-y-6">
        {/* ✅ Show only current step */}
        <DialogueStepCard
          key={module.steps[stepIndex].id}
          step={module.steps[stepIndex]}
          onStepComplete={handleNext}
        />

        <div className="mt-6 flex justify-center gap-4 cursor-pointer">
          <ExitLearning chapterId={chapter.id} />
        </div>
      </div>
    </div>
  );
};

export default DialogueCard;
