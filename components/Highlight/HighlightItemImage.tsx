import React from "react";

interface HighlightItemImageProps {
  children: React.ReactNode;
}

const HighlightItemImage: React.FC<HighlightItemImageProps> = ({
  children,
}) => {
  return (
    <div className="flex sm:basis-48 max-md:justify-center md:[&>img]:max-w-40">
      {children}
      <span className="max-md:hidden mt-5 grow-0 shrink-0 basis-8 h-1 bg-primary-beaver "></span>
    </div>
  );
};

export default HighlightItemImage;
