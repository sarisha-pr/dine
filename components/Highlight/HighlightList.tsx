import React from "react";

interface HighlightListProps {
  children: React.ReactNode;
}

const HighlightList: React.FC<HighlightListProps> = ({ children }) => {
  return <ul className="flex flex-col gap-6">{children}</ul>;
};

export default HighlightList;
