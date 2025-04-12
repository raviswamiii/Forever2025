import React from "react";
import { assets } from "../assets/assets";

export const Policy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div className="flex flex-col items-center">
        <img className="h-12 mb-5" src={assets.exchange_icon} alt="" />
        <p className="text-gray-800">Easy Exchange Policy</p>
        <p className="text-gray-400">We offer hassle free exchange policy</p>
      </div>
      <div className="flex flex-col items-center ">
        <img className="h-12 mb-5" src={assets.quality_icon} alt="" />
        <p className="text-gray-800">7 Days Return Policy</p>
        <p className="text-gray-400">We provide 7 days free return policy</p>
      </div>
      <div className="flex flex-col items-center ">
        <img className="h-10 sm:h-12 mb-5" src={assets.support_img} alt="" />
        <p className="text-gray-800">Best Customer Support</p>
        <p className="text-gray-400">We provide 24/7 customer support</p>
      </div>
    </div>
  );
};
