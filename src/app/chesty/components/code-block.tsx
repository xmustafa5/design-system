"use client";
import { useState } from "react";

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  title?: string;
}

export function CodeBlock({
  code,
  language = "typescript",
  showLineNumbers = true,
  title,
}: CodeBlockProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="group relative">
      {/* Header with title and language badge */}
      <div className="flex items-center justify-between px-4 py-2 bg-slate-900 rounded-t-lg border-b border-slate-800">
        <div className="flex items-center gap-2">
          {title && (
            <span className="text-sm font-medium text-slate-300">{title}</span>
          )}
          <span className="text-xs font-mono text-slate-500">{language}</span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 text-xs text-slate-400 hover:text-slate-100 transition-colors"
        >
          {isCopied ? (
            <>
              <CheckIcon className="w-4 h-4" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <CopyIcon className="w-4 h-4" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code content */}
      <div className="relative" data-language={language} data-theme="dark">
        {showLineNumbers && (
          <div
            aria-hidden="true"
            className="select-none absolute left-0 top-0 w-[60px] text-slate-500 text-sm bg-slate-950/50"
          >
            {code.split("\n").map((_, i) => (
              <span
                key={i}
                className="block text-right pr-4 leading-6 hover:text-slate-300"
              >
                {i + 1}
              </span>
            ))}
          </div>
        )}
        <pre className="overflow-x-auto bg-slate-950 py-4 text-sm leading-6 text-slate-50 rounded-b-lg">
          <code
            className={`language-${language} font-mono`}
            style={{
              paddingLeft: showLineNumbers ? "60px" : "16px",
              paddingRight: "16px",
              display: "block",
            }}
          >
            {code}
          </code>
        </pre>

        {/* Gradient fade for overflow */}
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-slate-950 to-transparent" />
      </div>
    </div>
  );
}

// Icons components
function CopyIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
