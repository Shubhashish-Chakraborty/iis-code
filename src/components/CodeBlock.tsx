import React, { useState } from "react";

interface CodeBlockProps {
  id: number;
  title: string;
  code: string;
  output?: string;
  videoUrl?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ id, title, code, output, videoUrl }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy code:", error);
    }
  };
  
  const handleWatchVideo = () => {
    if (videoUrl) {
      window.open(videoUrl, "_blank");
    }
  };

  return (
    <div 
      id={`section-${id}`}
      className="my-4 sm:my-6 mb-6 sm:mb-10 rounded-lg overflow-hidden cursor-pointer shadow-lg shadow-blue-200 hover:shadow-2xl hover:shadow-purple-500 transition-all duration-500 bg-gray-800 font-bold text-gray-100 max-w-4xl mx-auto scroll-mt-24" // Add scroll-mt-24 for offset
    >
      {/* Title */}
      <h3 className="px-3 sm:px-4 py-2 bg-codeblock1 text-base sm:text-lg text-center font-semibold break-words">{title}</h3>

      {/* Code Container */}
      <div className="relative">
        {/* Header with copy button */}
        <div className="flex justify-end px-3 sm:px-4 gap-x-6 py-2 bg-codeblock1">
          {videoUrl && (
            <button
              onClick={handleWatchVideo}
              className="cursor-pointer hover:scale-105 transition-all duration-300 bg-red-700 px-3 py-1 font-bold rounded-3xl"
            >
              Watch Explanation
            </button>
          )}
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-300 cursor-pointer hover:text-green-400 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-5 sm:w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M8 3a1 1 0 011-1h2a1 1 0 011 1v1h1a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h1V3zM5 5h10v8H5V5z" />
            </svg>
            <span className="whitespace-nowrap">{isCopied ? "Copied!" : "Copy"}</span>
          </button>
        </div>

        {/* Code Block */}
        <pre className="p-3 sm:p-4 overflow-x-auto text-xs sm:text-sm max-w-full">
          <code className="block whitespace-pre overflow-x-auto font-mono">{code}</code>
        </pre>
      </div>

      {/* Output Section */}
      {output && (
        <div className="p-3 sm:p-4 bg-codeblock2">
          <h4 className="text-base sm:text-lg font-semibold mb-2">Output:</h4>
          <pre className="text-xs sm:text-sm whitespace-pre-wrap break-words font-mono">{output}</pre>
        </div>
      )}
    </div>
  );
};

export default CodeBlock;