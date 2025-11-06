import React from "react";

export default function DashboardCard({ chapter, onClick }) {
  const { title, lessonsCompleted, totalLessons, chapterNumber } = chapter;
  const progress = (3 / totalLessons) * 100;

  return (
    <div
      onClick={onClick}
      className="cursor-pointer p-4 rounded-lg shadow-md mb-4"
      style={{ backgroundColor: "#1B263B" }}
    >
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-[#48f585] font-semibold">
            CHAPTER {chapterNumber}
          </p>
          <h3 className="text-lg font-bold text-[#E6E6E6] mt-1">{title}</h3>
          <p className="text-sm text-[#E6E6E6] mt-1">
            {lessonsCompleted} of {totalLessons} lessons completed
          </p>
        </div>
        <button
          className="px-3 py-2 rounded-md  font-bold"
          style={{ backgroundColor: "#48f585" }}
        >
          ▶
        </button>
      </div>
      {/* Progress bar */}
      <div className="mt-3 w-full bg-[#0D1B2A] rounded-full h-2">
        <div
          className="h-2 rounded-full"
          style={{
            width: `${progress}%`,
            backgroundColor: "#3DDC97",
          }}
        ></div>
      </div>
    </div>
  );
}
