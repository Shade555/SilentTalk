import React from "react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ModuleCard = ({ chapterId, module, moduleStatus }) => {
  const status = moduleStatus[module.id];

  const cardClasses = `flex-grow p-3 rounded-lg shadow-md border border-[#374151] transition duration-200
    ${
      status === "current"
        ? "bg-[#2A2F45] border-amber-400"
        : status === "locked"
        ? "bg-[#1E2235] opacity-50 cursor-not-allowed"
        : "bg-[#1E2235] border-emerald-400"
    }`;

  const content = (
    <div className={cardClasses}>
      {/* label */}
      <p className="text-xs text-amber-400 mb-1 font-semibold">{module?.label}</p>

      {/* Title */}
      <h2 className={`text-sm font-semibold mb-1 ${status === "current" ? "text-amber-400" : "text-emerald-400"}`}>
        {module?.title}
      </h2>

      {/* Description */}
      <p className="text-gray-400 text-xs leading-snug">
        {module?.description}
      </p>
    </div>
  );

  if (status === "locked") {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div>{content}</div>
          </TooltipTrigger>
          <TooltipContent side="top" className="text-sm bg-amber-300 text-black p-2 rounded shadow-lg ">
            Complete the previous module to unlock this.
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return (
    <Link href={`/dashboard/chapters/${chapterId}/modules/${module.id}`} className="flex-grow" >
      {content}
    </Link>
  );
};

export default ModuleCard;
