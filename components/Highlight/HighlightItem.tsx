import React from "react";

interface HighlightItemProps {
  children: React.ReactNode;
}

const HighlightItem: React.FC<HighlightItemProps> = ({ children }) => {
  return (
    <li className="flex max-md:flex-col items-center gap-8 pb-12 sm:pb-8 last:pb-0 border-b border-opacity-[0.15] border-white last:border-none">
      {children}
      {/* <span className="absolute bottom-0 inset-x-0 h-[1px] bg-white opacity-15"></span> */}
    </li>
  );
};

export default HighlightItem;
