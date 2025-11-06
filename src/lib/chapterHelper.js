import { FaPlay, FaCheck, FaUser } from "react-icons/fa";

// Helpers for UI
export const getStatusIcon = (status) => {
    switch (status) {
        case "completed":
            return <FaCheck className="text-white text-lg" />;
        case "current":
            return <FaPlay className="text-[#1E2235] text-lg" />;
        default:
            return <FaUser className="text-gray-400 text-lg" />;
    }
};


export const getStatusClasses = (status) => {
    switch (status) {
        case "completed":
            return "bg-emerald-400";
        case "current":
            return "bg-amber-400";
        default:
            return "bg-[#2A2F45] border border-[#374151]";
    }
};


export const getChapterId = (chapterId) => {
    const numberMatch = chapterId.match(/\d+/);
    const result = numberMatch ? numberMatch[0] : null;
    return result
}


// Helpers for ChapterCard
export const getChapterStatusIcon = (status) => {
    switch (status) {
        case "completed":
            return <FaCheck className="text-white text-sm" />;
        case "current":
            return <FaPlay className="text-[#1E2235] text-sm" />;
        default:
            return <FaUser className="text-gray-400 text-sm" />;
    }
};