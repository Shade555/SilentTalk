import { useState, useRef, useEffect } from "react";
import VideoBubble from "./VideoBubble";
import { Button } from "../ui/button";
import { Lightbulb, HelpCircle } from "lucide-react";

const DialogueStepCard = ({ step, onStepComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [checked, setChecked] = useState(false);
  const [finished, setFinished] = useState(false);

  const videoRefs = useRef({});
  const chatEndRef = useRef(null);

  // Build the ordered list of step items: all videos, then optional testing, then optional suggestions
  const items = [...(step.videos || []), step.testing, step.suggestions].filter(Boolean);
  const currentItem = items[currentIndex];

  // Only treat sender/receiver as videos
  const isVideoType = (t) => t === "sender" || t === "receiver" || t === "reciever";

  // Grid layout for MCQ options: 4 -> one row of 4, 3 -> one row of 3, 2 -> one row of 2, else stack
  const getOptionGridClass = (count) => {
    if (count === 4) return "grid grid-cols-4 gap-2";
    if (count === 3) return "grid grid-cols-3 gap-2";
    if (count === 2) return "grid grid-cols-2 gap-2";
    return "grid grid-cols-1 gap-2";
  };

  // Scroll to bottom on new content
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [currentIndex, checked]);

  // Notify parent when finished
  useEffect(() => {
    if (finished) onStepComplete();
  }, [finished, onStepComplete]);

  const handleVideoEnd = () => setCurrentIndex((prev) => prev + 1);

  const handleReplay = (id) => {
    const video = videoRefs.current[id];
    if (video) {
      video.currentTime = 0;
      video.play();
    }
  };

  const handleCheckAnswer = (answer) => {
    setChecked(true);
    setTimeout(() => {
      setChecked(false);
      setSelectedOption(null);

      setCurrentIndex((prev) => {
        const nextIndex = prev + 1;
        if (nextIndex >= items.length) {
          setFinished(true);
          return prev;
        }
        return nextIndex;
      });
    }, 2000);
  };

  // If current item is "suggestions", auto-advance (or finish if last)
  useEffect(() => {
    if (!currentItem) return;
    if (currentItem.type !== "suggestions") return;
  
    const isLast = currentIndex >= items.length - 1;
    const delay = isLast ? 6500 : 1800;
    const t = setTimeout(() => {
      if (isLast) {
        setFinished(true);
      } else {
        setCurrentIndex((prev) => prev + 1);
      }
    }, delay);

    return () => clearTimeout(t);
  }, [currentItem, currentIndex, items.length]);

  return (
    <div className="mb-2 space-y-2">
      {/* History Videos */}
      {items.slice(0, currentIndex).map(
        (item, idx) =>
          isVideoType(item.type) && (
            <VideoBubble
              key={idx}
              ref={(el) => (videoRefs.current[`history-${idx}`] = el)}
              id={`history-${idx}`}
              videoType={"history"}
              type={item.type}
              url={item.url}
              label={item.label}
              autoPlay={false}
              onReplay={handleReplay}
            />
          )
      )}

      {/* Current Video */}
      {currentItem && isVideoType(currentItem.type) && (
        <VideoBubble
          ref={(el) => (videoRefs.current[`current-${currentIndex}`] = el)}
          id={`current-${currentIndex}`}
          videoType={"current"}
          type={currentItem.type}
          url={currentItem.url}
          label={currentItem.label}
          autoPlay
          onEnded={handleVideoEnd}
          onReplay={handleReplay}
        />
      )}


      {/* Current Question (MCQ) */}
      {currentItem && currentItem.type === "mcq" && (
        <div className="relative my-3 p-4 max-w-md rounded-2xl bg-[#2A2F45] border border-[#374151] shadow-lg ring-1 ring-amber-400/20">
          {/* Left accent bar */}
          <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-400 to-emerald-400 rounded-l-2xl" />

          {/* Header */}
          <div className="flex items-start gap-3 mb-3">
            <div className="p-1.5 rounded-md bg-amber-400/15 text-amber-300">
              <HelpCircle className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm font-semibold text-amber-300 tracking-wide">{currentItem.title}</p>
              <p className="text-gray-300 mt-1 leading-relaxed">{currentItem.Question}</p>
            </div>
          </div>

          {/* Options */}
          <div className={getOptionGridClass(currentItem.options.length)}>
            {currentItem.options.map((opt) => {
              const isSelected = selectedOption === opt.label;
              const isCorrect = checked && opt.label === currentItem.answer;
              const isWrongSelection = checked && isSelected && !isCorrect;

              const base = "w-full text-left flex items-center px-3 py-2 rounded-xl border transition-colors";
              const preCheck = isSelected
                ? "bg-[#1E2235] border-amber-400 text-amber-300"
                : "bg-[#1E2235] border-[#374151] hover:bg-[#262b41] text-white/90";
              const postCheck = isCorrect
                ? "bg-emerald-500/15 border-emerald-400 text-emerald-300"
                : isWrongSelection
                ? "bg-red-500/15 border-red-400 text-red-300"
                : "bg-[#1E2235] border-[#374151] text-white/90";

              const cls = `${base} ${checked ? postCheck : preCheck}`;

              return (
                <label key={opt.id} className={cls}>
                  <input
                    type="radio"
                    name="answer"
                    value={opt.label}
                    checked={isSelected}
                    onChange={() => setSelectedOption(opt.label)}
                    className="hidden"
                  />
                  <span className="whitespace-pre-wrap leading-snug">{opt.label}</span>
                </label>
              );
            })}
          </div>

          {/* Action & feedback */}
          <div className="mt-3 flex items-center justify-between">
            {!checked ? (
              <Button
                variant="check"
                onClick={() => handleCheckAnswer(currentItem.answer)}
                disabled={!selectedOption}
              >
                Check
              </Button>
            ) : (
              <div className={`text-sm font-semibold ${selectedOption === currentItem.answer ? "text-emerald-400" : "text-red-400"}`}>
                {selectedOption === currentItem.answer ? "Correct!" : `Wrong! ${currentItem.explanation || ""}`}
              </div>
            )}
          </div>
        </div>
      )}
      
      {/* Suggestions Card */}
      {currentItem && currentItem.type === "suggestions" && (
        <div className="relative my-3 p-4 max-w-md rounded-2xl bg-[#2A2F45] border border-[#374151] shadow-lg ring-1 ring-amber-400/20">
          {/* Left accent bar */}
          <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-400 to-emerald-400 rounded-l-2xl" />

          {/* Header */}
          <div className="flex items-start gap-3 mb-2">
            <div className="p-1.5 rounded-md bg-amber-400/15 text-amber-300">
              <Lightbulb className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm font-semibold text-amber-300 tracking-wide">Suggestions</p>
            </div>
          </div>

          {/* Messages */}
          <div className="mt-1 space-y-2">
            {(currentItem.messages || []).map((msg, i) => (
              <div key={i} className="flex items-start gap-2 text-gray-200">
                <span className="mt-1 size-1.5 rounded-full bg-amber-300/80" />
                <p className="leading-relaxed">{msg}</p>
              </div>
            ))}
          </div>

          {/* Redirect hint */}
          <p className="mt-3 text-xs text-gray-400">
            {currentIndex >= items.length - 1
              ? "Wrapping up this module..."
              : "Continuing to the next item..."}
          </p>
        </div>
      )}

      {/* Scroll target */}
      <div ref={chatEndRef} />
    </div>
  );
};

export default DialogueStepCard;

