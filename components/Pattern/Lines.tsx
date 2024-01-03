import React from "react";

interface LinesProps {
  className?: string;
}

const Lines: React.FC<LinesProps> = ({ className }) => {
  return (
    <div className={`w-40 flex flex-col gap-2 ${className}`}>
      <span className="w-full h-[0.375rem] bg-primary"></span>
      <span className="w-full h-[0.375rem] bg-primary"></span>
      <span className="w-full h-[0.375rem] bg-primary"></span>
      <span className="w-full h-[0.375rem] bg-primary"></span>
      <span className="w-full h-[0.375rem] bg-primary"></span>
      <span className="w-full h-[0.375rem] bg-primary"></span>
    </div>
  );
};

export default Lines;
