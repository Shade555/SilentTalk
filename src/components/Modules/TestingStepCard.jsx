import { useState, useEffect, useRef } from "react";

const TestingStepCard = ({ step, onStepComplete, onSetCorrectCount, onSetWrongCount }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [checked, setChecked] = useState(false);
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (step?.type === "input") {
      setInput(""); // reset input
      setChecked(false);
      inputRef.current?.focus();
    }
  }, [step]);

  const handleCheckAnswer = () => {
    setChecked(true);

    // Snapshot current values to avoid stale state after resets
    const currInput = input.trim().toLowerCase();
    const currAnswer = (step?.answer || "").toLowerCase();
    const currSelected = selectedOption;

    let isCorrect = false;
    if (step?.type === "input") {
      isCorrect = currInput === currAnswer;
    } else if (step?.type === "mcq") {
      isCorrect = currSelected === step?.answer;
    }

    if (isCorrect) {
      onSetCorrectCount(c => c + 1);
    } else {
      onSetWrongCount(w => w + 1);
    }

    // Delay only for showing feedback, but use the snapshotted result
    setTimeout(() => {
      setChecked(false);
      // Call onStepComplete BEFORE clearing local state (or use snapshots)
      onStepComplete({
        correct: isCorrect ? 1 : 0,
        wrong: isCorrect ? 0 : 1,
      });
      // Now clear UI state safely
      setSelectedOption("");
      setInput("");
    }, 2000);
  };


  const optionGridClass = (count) => `grid grid-cols-${count > 2 ? 2 : 1} md:grid-cols-${count} gap-3`;

  return (
    <div className="mb-8">
      {/* Title */}
      <h2 className="text-center text-2xl font-bold text-cyan-400 mb-5">{step?.title}</h2>

      {/* Video */}
      {step?.videoUrl && (
        <div className="flex justify-center mb-5">
          <video
            src={step?.videoUrl}
            autoPlay
            muted
            loop
            playsInline
            className="rounded-xl shadow-lg border-2 border-cyan-500 w-full max-w-sm"
          />
        </div>
      )}

      {/* Input */}
      {/* Input */}
      {step?.type === "input" && (
        <div className="max-w-sm mx-auto p-3 bg-gray-800 rounded-xl shadow-md border border-gray-700">
          <input
            type="text"
            placeholder="Enter the sign name..."
            value={input}
            ref={inputRef}
            onChange={(e) => setInput(e.target.value)}
            className="w-full py-2 px-4 rounded-lg text-white placeholder-gray-400 border border-gray-600  focus:outline-none focus:ring-0"
          />
          <button
            onClick={handleCheckAnswer}
            disabled={!input.trim()} // ✅ Disabled if empty or spaces
            className={`w-full mt-4 p-2 rounded-lg font-semibold text-black transition
        ${!input.trim()
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-green-400 hover:bg-green-500 cursor-pointer"
              }`}
          >
            Check
          </button>
          {checked && (
            <p className={`mt-3 text-center font-semibold ${input.trim().toLowerCase() === step?.answer.toLowerCase() ? "text-green-400" : "text-red-400"}`}>
              {input.trim().toLowerCase() === step?.answer.toLowerCase() ? "Correct!" : `Wrong! Answer: ${step?.answer}`}
            </p>
          )}
        </div>
      )}


      {/* MCQ */}
      {step?.type === "mcq" && (
        <div className="max-w-md mx-auto p-5 bg-gray-800 rounded-xl shadow-md border border-gray-700">
          <p className="mb-4 text-gray-300 font-medium">{step?.Question}</p>
          <div className={optionGridClass(step?.options.length)}>
            {step?.options.map((opt) => {
              const isSelected = selectedOption === opt.label;
              const isCorrect = checked && opt.label === step?.answer;
              const isWrongSelection = checked && isSelected && !isCorrect;

              const base = "p-3 rounded-lg border font-medium cursor-pointer text-center transition";
              const preCheck = isSelected
                ? "bg-gray-700 border-cyan-400 text-cyan-400 shadow-inner"
                : "bg-gray-900 border-gray-700 hover:border-cyan-400 hover:bg-gray-800 text-gray-100";
              const postCheck = isCorrect
                ? "bg-green-500/20 border-green-400 text-green-400"
                : isWrongSelection
                  ? "bg-red-500/20 border-red-400 text-red-400"
                  : "bg-gray-900 border-gray-700 text-gray-100";

              return (
                <label
                  key={opt.id}
                  className={`${base} ${checked ? postCheck : preCheck}`}
                >
                  <input
                    type="radio"
                    name="answer"
                    value={opt.label}
                    checked={isSelected}
                    onChange={() => setSelectedOption(opt.label)}
                    className="hidden"
                  />
                  {opt.label}
                </label>
              );
            })}
          </div>
          <button
            onClick={handleCheckAnswer}
            disabled={!selectedOption}
            className="w-full mt-4 py-3 bg-green-400 rounded-lg text-white font-semibold"
          >
            Check
          </button>
          {checked && (
            <p className={`mt-3 text-center font-semibold ${selectedOption === step?.answer ? "text-green-400" : "text-red-400"}`}>
              {selectedOption === step?.answer ? "Correct!" : `Wrong! Answer: ${step?.answer}`}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default TestingStepCard;
