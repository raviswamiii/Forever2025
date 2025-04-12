import React from "react";
import { assets } from "../assets/assets";

export const Hero = () => {
  return (
    <div className="border border-gray-400 flex sm:flex-row flex-col">
      <div className="w-full sm:w-1/2 flex justify-center items-center py-10 sm:py-0">
        <div>
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-gray-800"></p>
            <p className="font-medium text-sm md:text-base text-gray-800">OUR BESTSELLERS</p>
          </div>
          <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed text-gray-800">
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-medium text-gray-800 text-sm md:text-base">SHOP NOW</p>
            <p className="w-8 md:w-11 h-[2px] bg-gray-800"></p>
          </div>
        </div>
      </div>
      <img className="w-full sm:w-1/2" src={assets.hero_img} alt="" />
    </div>
  );
};
