"use client";
import React from 'react'
import { useState } from "react";
import { useRouter } from "next/navigation";
import { moduleCompleted } from "@/actions/moduleActions.js";
import { chapterCompleted } from "@/actions/chapterActions.js";
import { getUserIdByClerkId } from "@/actions/UserActions.js";
import { toast } from "sonner";
import LearningStepCard from '@/components/Modules/LearningStepCard.jsx';
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import ExitLearning from "@/components/ExitLearning";

const LearningCard = ({ module, user, chapter }) => {
    const router = useRouter();
    const [stepIndex, setStepIndex] = useState(0);
    const [isRedirecting, setIsRedirecting] = useState(false);

    const currentStep = module.steps[stepIndex];

    // Handle Step Navigation
    const handleNext = async () => {
        if (stepIndex < module.steps.length - 1) {
            setStepIndex((prev) => prev + 1);
            return;
        }

        try {
            // Get userId from ClerkId
            const clerkUserId = user.id;
            const userId = await getUserIdByClerkId(clerkUserId);

            // Mark module as completed
            const chapterId = chapter.id;
            const success = await moduleCompleted(userId, chapterId, module.id);

            if (success) {
                // ✅ Extra check: if this is the last module in the chapter
                toast.success(`🎉 You completed the Module : ${module.title}`);
                const lastModuleId = chapter.modules[chapter.modules.length - 1].id;
                if (module.id === lastModuleId) {
                    await chapterCompleted(userId, chapterId);
                    setIsRedirecting(true);  // show overlay
                    toast.success(`🎉 You completed the whole ${chapterTitle} Chapter!`);
                    router.push(`/dashboard`);
                    return;
                }

                // Redirect back to the chapter page (module list)
                setIsRedirecting(true);  // show overlay
                router.push(`/dashboard/chapters/${chapterId}`);
            } else {
                toast.error(`❌ Failed to complete ${module.title} Module.`);
                router.push(`/dashboard/chapters/${chapterId}`);
            }
        } catch (error) {
            console.error("Error completing module:", error);
            alert("⚠️ Something went wrong. Please try again.");
        }
    };

    return (
        <div>

            {/* Redirecting Overlay */}
            {isRedirecting && (
                <div className="fixed inset-0 bg-black/60 flex flex-col items-center justify-center z-50">
                    <LoaderCircle className="animate-spin text-amber-400 w-12 h-12 mb-4" />
                    <p className="text-white text-lg sm:text-xl font-semibold">Redirecting...</p>
                </div>
            )}

            <LearningStepCard step={currentStep} />

            <div className="mt-6 flex justify-center gap-4 cursor-pointer">
                {/* Exit Button (outlined, subtle) */}
                <ExitLearning chapterId={chapter.id} />

                {/* Primary Next/Finish Button */}
                <Button className="bg-amber-400 text-[#1E2235] hover:bg-amber-500 hover:text-white font-semibold cursor-pointer" onClick={handleNext} >
                    {stepIndex < module.steps.length - 1 ? "Next →" : "Finish ✅"}
                </Button>
            </div>

        </div>
    )
}

export default LearningCard
