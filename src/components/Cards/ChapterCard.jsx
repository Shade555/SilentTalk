// // chapterCard.jsx
// import Link from "next/link";
// import { Badge } from "@/components/ui/badge";
// import { FaPlay } from "react-icons/fa";

// const ChapterCard = ({ chapter, moduleDetails }) => {
//     const totalModules = chapter.modules.length;
//     const completedModules = moduleDetails.length; // since it's an array of completions
//     const progressPercent = totalModules > 0 ? (completedModules / totalModules) * 100 : 0;

//     return (
//         <div className="w-full bg-[#2A2F45] border border-[#374151] rounded-xl shadow-lg p-4 hover:border-emerald-400 transition duration-200 relative group" >

//             <div className="flex justify-around">
//                 {/* Chapter Label */}
//                 <Badge variant="asl" className="mb-2">
//                     {chapter.label}
//                 </Badge>

//                 <Link
//                 href={`/dashboard/chapters/${chapter.id}`}
//                 className=" px-6 py-2.5 bg-emerald-400 text-[#1E2235] rounded-xl font-semibold shadow-lg hover:bg-emerald-500 hover:text-white transition duration-200"
//             >
//                 <FaPlay className="inline mr-2 mb-1" /> 
//             </Link>
//             </div>


//             {/* Chapter Title */}
//             <h2 className="text-2xl font-bold mb-2 text-emerald-400 group-hover:text-amber-400 transition">
//                 {chapter.title}
//             </h2>

//             {/* Module Count */}
//             <p className="text-gray-400 text-base mb-2">
//                 {totalModules} {totalModules === 1 ? "Module" : "Modules"}
//             </p>

//             {/* Progress text */}
//             <p className="text-sm mb-4 text-gray-300">
//                 {completedModules} of {totalModules} completed
//             </p>

//             {/* Progress Bar */}
//             <div className="w-full bg-[#2B2B33] rounded-full h-3 mb-6">
//                 <div
//                     className="h-3 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 transition-all duration-300"
//                     style={{ width: `${progressPercent}%` }}
//                 ></div>
//             </div>

//             {/* Start Chapter Button */}

//         </div>
//     );
// };

// export default ChapterCard;



// components/ChapterCard.jsx
// import React from "react";
// import Link from "next/link";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";
// import { Badge } from "@/components/ui/badge";
// import { getChapterStatusIcon, getStatusClasses , getChapterId } from "@/lib/chapterHelper";

// const ChapterCard = ({ chapter, chapterStatus, moduleDetails }) => {

//     const totalModules = chapter.modules.length;
//     const completedModules = moduleDetails.length; // since it's an array of completions
//     const progressPercent = totalModules > 0 ? (completedModules / totalModules) * 100 : 0;

//   const content = (
//     <div
//       className={`p-5 rounded-xl shadow-md transition duration-200 ${getStatusClasses(chapterStatus)}`}
//     >
//         <div className="flex justify-around">
//                  {/* Chapter Label */}
//                  <Badge variant="asl" className="mb-2">
//                      {chapter.label}
//                  </Badge>

//                  <Link
//                 href={`/dashboard/chapters/${chapter.id}`}
//                 className="size-10 sm:size-12 flex-shrink-0 rounded-full z-10 px-6 py-2.5 bg-emerald-400 font-semibold shadow-lg justify-end"
//             >
//                 { getChapterId(chapter.id) == 1 && completedModules == 0 ? <FaPlay className=" text-black" />:  getChapterStatusIcon(chapterStatus) } 
//             </Link>
//             </div>
//       <div className="flex items-center gap-3">
//         {/* <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#1E2235] shadow">
//           {getChapterStatusIcon(chapterStatus)}
//         </div> */}
//         <h2 className="text-lg font-bold text-emerald-400">{chapter.title}</h2>
//       </div>
//       <p className="mt-2 text-sm text-gray-300">{chapter.description}</p>
//       {/* Progress text */}
//             <p className="text-sm mb-4 text-gray-300">
//                  {completedModules} of {totalModules} completed
//            </p>

//              {/* Progress Bar */}
//              <div className="w-full bg-[#2B2B33] rounded-full h-3 mb-6">
//                  <div
//                     className="h-3 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 transition-all duration-300"
//                     style={{ width: `${progressPercent}%` }}
//                 ></div>
//             </div>
//     </div>
//   );

//   if (chapterStatus === "locked") {
//     return (
//       <TooltipProvider>
//         <Tooltip>
//           <TooltipTrigger asChild>
//             <div>{content}</div>
//           </TooltipTrigger>
//           <TooltipContent
//             side="top"
//             className="text-sm bg-amber-300 text-black p-2 rounded shadow-lg"
//           >
//             Complete the previous chapter to unlock this.
//           </TooltipContent>
//         </Tooltip>
//       </TooltipProvider>
//     );
//   }

//   return (
//     <Link href={`/dashboard/chapters/${chapter.id}`} className="block">
//       {content}
//     </Link>
//   );
// };

// export default ChapterCard;

// components/ChapterCard.jsx
// import React from "react";
// import Link from "next/link";
// import { Badge } from "@/components/ui/badge";
// import {
//     Tooltip,
//     TooltipContent,
//     TooltipProvider,
//     TooltipTrigger,
// } from "@/components/ui/tooltip";
// import { getChapterStatusIcon, getStatusClasses, getChapterId } from "@/lib/chapterHelper";
// import { FaPlay } from "react-icons/fa";

// const ChapterCard = ({ chapter, chapterStatus, moduleDetails }) => {
//     const totalModules = chapter.modules.length;
//     const completedModules = moduleDetails.length; // since it's an array of completions
//     const progressPercent = totalModules > 0 ? (completedModules / totalModules) * 100 : 0;

//     const cardClasses = `flex-grow p-4 sm:p-5 rounded-xl shadow-md border transition duration-200
//     ${chapterStatus === "current"
//             ? "bg-[#2A2F45] border-amber-400"
//             : chapterStatus === "locked"
//                 ? "bg-[#1E2235] opacity-50 cursor-not-allowed"
//                 : "bg-[#1E2235] border-emerald-400"
//         }`;

//     const content = (
//         <div className={cardClasses}>
//             {/* Header */}
//             <div className="flex justify-between items-center mb-2">
//                 {/* Chapter Label */}
//                 <Badge variant="asl">{chapter.label}</Badge>

//                 {/* Status Icon */}
//                 <div className="relative flex items-center">
//                     {chapterStatus === "current" && (
//                         <span
//                             className="absolute -top-10 -right-6 sm:-right-6 z-20 animate-float px-3 py-2 select-none rounded-full text-[10px] sm:text-xs font-extrabold tracking-wider
//                                        bg-amber-400/15 text-amber-300 border border-amber-400/50 shadow-sm backdrop-blur-[1px]"
//                         >
//                             CONTINUE
//                         </span>
//                     )}
//                     <Link
//                         href={`/dashboard/chapters/${chapter.id}`}
//                         className={`flex items-center justify-center rounded-full flex-shrink-0 ${getStatusClasses(chapterStatus)} size-9 sm:size-10 relative z-10`}
//                     >
//                         {getChapterId(chapter.id) === 1 && completedModules === 0 ? (
//                             <FaPlay className="text-black text-sm sm:text-base" />
//                         ) : (
//                             getChapterStatusIcon(chapterStatus)
//                         )}
//                     </Link>
//                 </div>
//             </div>

//             {/* Title */}
//             <p className="font-bold text-emerald-400 text-base sm:text-lg md:text-xl leading-snug">
//                 {chapter.title}
//             </p>

//             {/* Description */}
//             <p className="mt-1 text-xs sm:text-sm text-gray-300">{chapter.description}</p>

//             {/* Progress Text */}
//             <p className="text-xs sm:text-sm mt-2 mb-3 text-gray-400">
//                 {completedModules} of {totalModules} completed
//             </p>

//             {/* Progress Bar */}
//             <div className="w-full bg-[#2B2B33] rounded-full h-2 sm:h-3">
//                 <div
//                     className="h-2 sm:h-3 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 transition-all duration-300"
//                     style={{ width: `${progressPercent}%` }}
//                 ></div>
//             </div>
//         </div>
//     )


//     if (chapterStatus === "locked") {
//         return (
//             <TooltipProvider>
//                 <Tooltip>
//                     <TooltipTrigger asChild>
//                         <div>{content}</div>
//                     </TooltipTrigger>
//                     <TooltipContent side="top" className="text-sm bg-amber-300 text-black p-2 rounded shadow-lg ">
//                         Complete the previous chapters to unlock this.
//                     </TooltipContent>
//                 </Tooltip>
//             </TooltipProvider>
//         );
//     }

//     return (
//         content
//     );
// };

// export default ChapterCard;


import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { getChapterStatusIcon, getStatusClasses, getChapterId } from "@/lib/chapterHelper";
import { FaPlay } from "react-icons/fa";


const ChapterCard = ({ chapter, chapterStatus, moduleDetails , hoverMsg }) => {

    const totalModules = chapter.modulesCount;
    const completedModules = moduleDetails.length; // since it's an array of completions
    const progressPercent = totalModules > 0 ? (completedModules / totalModules) * 100 : 0;

    // Card classes with relative positioning for badge
    const cardClasses = `relative w-full md:w-xl p-4 sm:p-5 rounded-lg shadow-md border transition duration-200 shadow-xl
    ${chapterStatus === "current"
            ? "bg-[#2A2F45] border-amber-400 shadow-amber-400/20"
            : chapterStatus === "locked"
                ? "bg-[#1E2235] opacity-50 cursor-not-allowed shadow-black/20"
                : "bg-[#1E2235] border-emerald-400 shadow-emerald-400/20"
        }`;


    const content = (
        <div className={cardClasses}>
            {/* CONTINUE badge for current chapter */}
            {chapterStatus === "current" && (
                <span className="absolute -top-4 -right-2 sm:-right-2 z-20 animate-float px-2 py-1 select-none rounded-full text-[12px] sm:text-[10px] font-extrabold tracking-wider bg-amber-400/15 text-amber-300 border border-amber-400/50 shadow-sm backdrop-blur-[1px]">
                    CONTINUE
                </span>
            )}

            {/* Header */}
            <div className="flex justify-between items-center mb-1">
                {/* Chapter Label */}
                <Badge variant={`${chapterStatus === "completed" ? "aslCompleted" : "asl"}`} className="text-xs sm:text-sm" asChild>
                    <Link href={`/dashboard/chapters/${chapter.id}`} >
                        {chapter.label}
                    </Link>
                </Badge>

                {/* Status Icon */}
                <Link
                    href={`/dashboard/chapters/${chapter.id}`}
                    className={`flex items-center justify-center rounded-full flex-shrink-0 ${getStatusClasses(chapterStatus)} size-7 sm:size-8 relative z-10`}
                >
                    {getChapterId(chapter.id) === 1 && completedModules === 0 ? (
                        <FaPlay className="text-black text-[8px] sm:text-sm" />
                    ) : (
                        getChapterStatusIcon(chapterStatus)
                    )}
                </Link>
            </div>

            {/* Title */}
            <p className="font-bold text-emerald-400 text-md sm:text-sm md:text-base leading-snug">
                {chapter.title}
            </p>

            {/* Description */}
            <p className="mt-1 text-sm text-gray-300">{chapter.description}</p>

            {/* Progress Text */}
            <p className="text-[10px] sm:text-xs mt-1 mb-2 text-gray-400">
                {completedModules} of {totalModules} completed
            </p>

            {/* Progress Bar */}
            <div className="w-full bg-[#2B2B33] rounded-full h-1.5 sm:h-2">
                <div className={`h-1.5 sm:h-2 rounded-full bg-gradient-to-r ${chapterStatus === "completed" ? "from-emerald-400 to-emerald-500" : "from-amber-400 to-amber-500"} transition-all duration-300`}
                    style={{ width: `${progressPercent}%` }}
                ></div>
            </div>
        </div>
    );

    // Wrap locked chapters with tooltip
    if (chapterStatus === "locked") {
        return (
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <div>{content}</div>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="text-sm bg-amber-300 text-black p-2 rounded shadow-lg">
                        {hoverMsg}
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        );
    }

    return content;
};

export default ChapterCard;
