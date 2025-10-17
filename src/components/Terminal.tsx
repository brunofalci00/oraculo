import { useEffect, useState } from "react";

interface TerminalProps {
  lines: string[];
  className?: string;
}

const Terminal = ({ lines, className = "" }: TerminalProps) => {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  useEffect(() => {
    if (currentLineIndex < lines.length) {
      const timer = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, lines[currentLineIndex]]);
        setCurrentLineIndex((prev) => prev + 1);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentLineIndex, lines]);

  return (
    <div className={`terminal p-6 ${className}`}>
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-primary"></div>
        <span className="ml-2 text-sm text-muted-foreground font-mono">
          terminal://oraculo.sys
        </span>
      </div>
      <div className="space-y-2">
        {displayedLines.map((line, index) => (
          <div key={index} className="font-mono text-sm">
            {line.startsWith("$") ? (
              <div className="text-primary">{line}</div>
            ) : line.startsWith(">") ? (
              <div className="text-muted-foreground pl-4">{line}</div>
            ) : (
              <div className="text-foreground">{line}</div>
            )}
          </div>
        ))}
        {currentLineIndex < lines.length && (
          <div className="flex items-center gap-1">
            <span className="text-primary font-mono">$</span>
            <span className="cursor inline-block w-2 h-4 bg-primary"></span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Terminal;
