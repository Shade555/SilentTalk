// import Link from "next/link";
// import { chapters } from "@/data/chapters.js";

// export default async function ChapterPage({ params }) {
//   const { chapterId } = await params;
//   const chapter = chapters.find((c) => c.id === chapterId);

//   if (!chapter) {
//     return (
//       <div className="min-h-screen p-6 text-red-500 bg-[#0A0A10]">
//         Chapter not found
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen p-6 bg-[#0A0A10]">
//       {/* Go Back Button */}
//       <Link
//         href="/dashboard"
//         className="inline-block mb-4 px-4 py-2 rounded-xl bg-amber-400 text-[#1E2235] font-semibold hover:bg-amber-500 hover:text-white transition duration-200"
//       >
//         ← Go Back
//       </Link>

//       {/* Chapter Title */}
//       <h1 className="text-3xl font-bold text-emerald-400 mb-6">
//         {chapter.title}
//       </h1>

//       {/* Module List */}
//       <ul className="space-y-4">
//         {chapter.modules.map((module) => (
//           <li
//             key={module.id}
//             className="p-4 rounded-2xl shadow-lg bg-[#2A2F45] hover:border-emerald-400 border border-[#374151] transition duration-200"
//           >
//             <h2 className="text-lg font-semibold mb-2 text-emerald-400">
//               {module.title}
//             </h2>
//             <Link
//               href={`/dashboard/chapters/${chapter.id}/modules/${module.id}`}
//               className="font-semibold inline-block mt-2 px-4 py-2 rounded-xl bg-emerald-400 text-[#1E2235] hover:bg-emerald-500 hover:text-white transition duration-200"
//             >
//               Start Module →
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }



// import Link from "next/link";
// import { chapters } from "@/data/chapters.js";
// import { FaPlay, FaCheck, FaPuzzlePiece } from "react-icons/fa"; // Remember to install react-icons

// export default async function ChapterPage({ params }) {
//   const { chapterId } = await params;
//   const chapter = chapters.find((c) => c.id === chapterId);

//   if (!chapter) {
//     return (
//       <div className="min-h-screen p-6 text-red-500 bg-[#1E2235]">
//         Chapter not found
//       </div>
//     );
//   }

//   // --- Dummy data for module status (for demonstration) ---
//   const moduleStatus = {
//     "1": "completed",
//     "2": "completed",
//     "3": "current",
//     "4": "locked",
//     "5": "locked",
//   };

//   const getStatusIcon = (status) => {
//     switch (status) {
//       case "completed":
//         return <FaCheck className="text-white" />;
//       case "current":
//         return <FaPlay className="text-[#1E2235]" />;
//       default:
//         return <FaPuzzlePiece className="text-gray-400" />;
//     }
//   };

//   const getStatusClasses = (status) => {
//     switch (status) {
//       case "completed":
//         return "bg-emerald-400";
//       case "current":
//         return "bg-amber-400";
//       default:
//         return "bg-[#2A2F45] border border-[#374151]";
//     }
//   };

//   return (
//     <div className="min-h-screen p-6 bg-[#1E2235] text-[#F3F4F6] font-sans">
//       <div className="max-w-xl mx-auto">
//         {/* Top Section */}
//         <div className="flex flex-col items-center justify-center text-center pt-8 pb-12">
//           {/* Back button */}
//           <Link href="/dashboard" className="self-start text-gray-400 mb-6 hover:text-emerald-400 transition">
//             ←
//           </Link>
//           <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest">
//             CHAPTER {chapter.id}
//           </h2>
//           <h1 className="text-3xl font-bold text-emerald-400 mt-2">
//             {chapter.title}
//           </h1>
//           <p className="text-sm text-gray-500 mt-2">{chapter.description}</p>
//         </div>

//         {/* Module List with Connector Line */}
//         <div className="relative">
//           {/* Vertical connector line */}
//           <div className="absolute left-1/2 transform -translate-x-1/2 top-10 bottom-10 w-0.5 bg-[#2A2F45]"></div>

//           <ul className="space-y-6">
//             {chapter.modules.map((module, index) => (
//               <li key={module.id} className="flex justify-center items-center">
//                 {/* Module Icon and Card Container */}
//                 <div className="flex w-full items-center">
//                   {/* Circle */}
//                   <div
//                     className={`w-16 h-16 flex-shrink-0 rounded-full z-10 flex items-center justify-center mr-6 ${getStatusClasses(moduleStatus[module.id])}`}
//                   >
//                     {getStatusIcon(moduleStatus[module.id])}
//                   </div>

//                   {/* Module Card */}
//                   <div className="flex-grow">
//                     <div
//                       className={`p-4 rounded-xl shadow-lg border border-[#374151] transition duration-200 
//                         ${moduleStatus[module.id] === 'current' ? 'bg-[#2A2F45] border-amber-400' : 'bg-[#1E2235] hover:border-emerald-400'}`}
//                     >
//                       <h2 className={`text-lg font-semibold mb-1 ${moduleStatus[module.id] === 'current' ? 'text-amber-400' : 'text-emerald-400'}`}>
//                         {module.title}
//                       </h2>
//                       <p className="text-gray-400 text-sm">{module.description}</p>
//                     </div>
//                   </div>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState, useEffect, use } from "react";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { getStatusIcon, getStatusClasses, getChapterId } from "@/lib/chapterHelper.js";
import { FaArrowLeftLong } from "react-icons/fa6";
import ModuleCard from "@/components/Cards/ModuleCard";
import { getUserIdByClerkId } from "@/actions/UserActions";
import { getModuleCompletionDetails } from "@/actions/moduleActions";
import { FaArrowRight } from "react-icons/fa";
import { chapterMap } from "@/data/chapterDetails";

export default function ChapterPage({ params }) {
  const { isLoaded, isSignedIn, user } = useUser();
  const [moduleStatus, setModuleStatus] = useState({});
  const [currentModuleId, setCurrentModuleId] = useState(null);
  const { chapterId } = use(params);

  // Find chapter
  const chapter = chapterMap[chapterId];
  if (!chapter) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 text-red-500 bg-[#1E2235] font-bold text-2xl">
        Chapter not found
      </div>
    );
  }

  // Fetch module completion details
  useEffect(() => {
    if (!isLoaded || !isSignedIn) return;

    const fetchData = async () => {
      try {
        const clerkUserId = user.id;
        const userId = await getUserIdByClerkId(clerkUserId);

        const completions = await getModuleCompletionDetails(userId, chapter.id);

        const statusMap = {};
        let currentId = null;

        chapter.modules.forEach((mod, index) => {
          if (completions.some((c) => c.moduleId === mod.id)) {
            statusMap[mod.id] = "completed";
          } else if (
            index === 0 ||
            statusMap[chapter.modules[index - 1]?.id] === "completed"
          ) {
            statusMap[mod.id] = "current";
            if (!currentId) currentId = mod.id; // track current module
          } else {
            statusMap[mod.id] = "locked";
          }
        });

        setModuleStatus(statusMap);
        setCurrentModuleId(currentId); // ✅ set only once here
      } catch (error) {
        console.error("Failed to fetch completions:", error);
      }
    };


    fetchData();
  }, [isLoaded, isSignedIn, user, chapter.id]);



  return (
    <div className="min-h-screen bg-[#1E2235] text-[#F3F4F6] font-sans px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-evenly py-4">
          <Link href="/dashboard" className="hover:text-emerald-400 transition">
            <FaArrowLeftLong className="text-white text-2xl" />
          </Link>

          <div className="flex flex-col text-center ">
            <h2 className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-widest text-center">
              CHAPTER {chapter.id ? getChapterId(chapter.id) : ""}
            </h2>
            <h1 className="text-xl sm:text-2xl font-bold text-emerald-400 mt-2">
              {chapter.title}
            </h1>
            <p className="text-sm sm:text-base text-gray-400 mt-2 leading-relaxed">
              {chapter.description}
            </p>
          </div>
        </div>

        {/* Module List */}
        <div className="relative pl-10 sm:pl-20">

          {/* Vertical line */}
          <div className="absolute top-8 bottom-8 w-1 bg-[#2A2F45]" />

          <ul className="space-y-4">
            {chapter.modules.map((module) => (
              <li key={module.id} className="relative flex items-center">
                {/* Status Circle */}
                <div
                  className={`size-10 sm:size-12 flex-shrink-0 rounded-full z-10 flex items-center justify-center absolute -left-6 sm:-left-6 ${getStatusClasses(
                    moduleStatus[module.id]
                  )}`}
                >
                  {getStatusIcon(moduleStatus[module.id])}

                  {/* CONTINUE label above the circle */}
                  {moduleStatus[module.id] === "current" && (
                    <>
                      <span
                        className="absolute -top-9 sm:-top-9 -right-5 animate-float px-3 py-1 select-none rounded-full text-[10px] sm:text-xs font-extrabold tracking-wider
                                   bg-amber-400/15 text-amber-300 border border-amber-400/50 shadow-sm backdrop-blur-[1px]"
                      >
                        CONTINUE
                      </span>
                    </>
                  )}
                </div>

                {/* Module Card */}
                <div className="ml-10 sm:ml-16 flex-1">
                  <ModuleCard
                    chapterId={chapter.id}
                    module={module}
                    moduleStatus={moduleStatus}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Start/Continue Learning Button */}
        <div className="flex justify-center mt-8">
          {currentModuleId ? (
            <Link
              href={`/dashboard/chapters/${chapterId}/modules/${currentModuleId}`}
              className="bg-amber-400 text-black font-bold py-2 px-4 rounded hover:bg-emerald-500 transition flex gap-3 items-center"
            >
              Continue Learning <FaArrowRight className="size-4" />
            </Link>
          ) : (
            <Link
              href={`/dashboard/chapters/${chapterId}/modules/${chapter.modules[0].id}`}
              className="bg-emerald-400 text-black font-bold py-2 px-4 rounded hover:bg-emerald-500 transition"
            >
              Start Learning
            </Link>
          )}
        </div>

      </div>
    </div>
  );
}
