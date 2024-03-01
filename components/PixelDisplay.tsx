import React from "react";

type Props = {
  displayText: string;
};

function PixelDisplay({ displayText }: Props) {
  return (
    <div className="text-center mt-10">
      <h1 className="gradient-text-micro-5-regular gradient-underline text-9xl ">
        <span>{displayText}</span>
      </h1>
    </div>
  );
}

export default PixelDisplay;
