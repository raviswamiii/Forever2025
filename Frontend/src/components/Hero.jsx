import React from "react";
import { assets } from "../assets/assets";

export const Hero = () => {
  return (
    <div className="border border-gray-400 flex">
      <div className="w-1/2 flex flex-col justify-center items-center">
        <div>
          <div className="flex items-center gap-2">
            <p className="h-[2px] w-11 bg-gray-800"></p>
            <p className="font-medium text-gray-800">OUR BESTSELLERS</p>
          </div>
          <h1 className="prata-regular text-[4vw] text-gray-800">
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-medium text-gray-800">SHOP NOW</p>
            <p className="h-[2px] w-11 bg-gray-800"></p>
          </div>
        </div>
      </div>
      <img className="w-1/2" src={assets.hero_img} alt="" />
    </div>
  );
};
