import React from "react";

interface HighlightItemDescProps {
  children: React.ReactNode;
}

const HighlightItemDesc: React.FC<HighlightItemDescProps> = ({ children }) => {
  return <div className="max-sm:text-center">{children}</div>;
};

export default HighlightItemDesc;
