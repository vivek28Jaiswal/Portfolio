"use client";
import React from "react";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";

export function HoverBorderGradientDemo() {
  return (
    (<div className="flex mt-[-10vh]">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white group text-black text-4xl dark:text-white flex items-center space-x-2">
        <span className="flex items-center  items-center gap-2"> You need a Developer ?

          <div className="relative overflow-hidden">
            <span className="block transition-all duration-300 group-hover:translate-x-[150%] group-hover:translate-y-[-100%]">
              <i class="ri-arrow-right-up-line text-xl"></i>
            </span>
            <span className="absolute top-0 left-0 translate-x-[-150%] transition-all duration-300 translate-y-full group-hover:translate-x-0  group-hover:translate-y-0">
              <i class="ri-arrow-right-up-line text-xl"></i>
            </span>
          </div>


        </span>
      </HoverBorderGradient>
    </div>)
  );
}
