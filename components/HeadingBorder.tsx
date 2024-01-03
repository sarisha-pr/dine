import React from "react";

const HeadingBorder = () => {
  return (
    <span className="flex gap-2 items-center max-lg:justify-center pb-10 lg:pb-14">
      <span className="flex-shrink-0 flex-grow-0 w-2 h-2 rounded-full border border-primary-beaver"></span>
      <span className="flex-shrink-0 flex-grow-0 w-14 h-[0.0625rem] bg-primary-beaver"></span>
    </span>
  );
};

export default HeadingBorder;
