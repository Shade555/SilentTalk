import { RotateCcw } from "lucide-react";
import { forwardRef, useEffect, useState } from "react";

const VideoBubble = forwardRef(({ id, videoType, type, url, label, autoPlay, onEnded, onReplay }, ref) => {
    const getVideoCardClasses = (bubbleType) =>
        bubbleType === "sender"
            ? "bg-gray-400 text-black rounded-2xl rounded-tl-none"
            : "bg-amber-400 border-2 border-amber-400 rounded-2xl rounded-tr-none";

    // Show replay overlay only for history videos; hide on replay, show again on end
    const [showReplayOverlay, setShowReplayOverlay] = useState(videoType === "history");

    useEffect(() => {
        // Reset overlay visibility if the type of the video bubble changes
        setShowReplayOverlay(videoType === "history");
    }, [videoType]);

    const handleEnded = (e) => {    
        if (videoType === "history") {
            setShowReplayOverlay(true);
        }
        onEnded?.(e);
    };

    return (
        <div className={`flex ${type === "sender" ? "justify-start mr-6 " : "justify-end ml-6"}`} >
            <div className={`relative p-1 max-w-md shadow-lg ${getVideoCardClasses(type)}`}>
                <div className="relative">
                    <video
                        ref={ref}
                        src={url}
                        autoPlay={autoPlay}
                        muted
                        onEnded={handleEnded}
                        className="rounded-xl w-80 shadow-md"
                    />

                    {videoType === "history" && showReplayOverlay && (
                        <div className="absolute inset-0 rounded-xl bg-black/40 flex items-center justify-center animate-fadeIn">
                            <button
                                onClick={() => {
                                    setShowReplayOverlay(false);
                                    onReplay?.(id);
                                }}
                                aria-label="Replay"
                                className="p-2 bg-white rounded-full shadow-lg transition-colors cursor-pointer"
                            >
                                <RotateCcw size={20} className="text-black font-extrabold" />
                            </button>
                        </div>
                    )}
                </div>

                {/* <div className="flex items-center justify-between mt-1">
                    {videoType === "history" && label && (
                        <p className="text-xs text-gray-100 font-medium">{label}</p>
                    )}
                </div> */}
            </div>
        </div>
    );
});

VideoBubble.displayName = "VideoBubble";
export default VideoBubble;
