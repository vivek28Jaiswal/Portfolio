import React from "react";
import { cn } from "../lib/utils";

export const Spotlight = ({ className, fill , top , left  , r}) => {
  return (
    <svg
    style={{ top: top, left: left }}
      className={cn(
        `animate-spotlight pointer-events-none absolute z-[1] h-[80%] w-[50%] opacity-0`,
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 1000"
      fill="none"
    >
      <g filter="url(#filter)">
        <circle
          cx="500"
          cy= "700"
          r={r}
          fill={fill || "white"}
          fillOpacity="0.21"
        />
      </g>
      <defs>
        <filter
          id="filter"
          x="0"
          y="0"
          width="1000"
          height="1000"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="80" result="effect1_foregroundBlur" />
        </filter>
      </defs>
    </svg>
  );
};
