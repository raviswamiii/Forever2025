import React from "react";
import { assets } from "../assets/assets";

export const Footer = () => {
  return (
    <div className="mt-[10vw]">
      <div className=" flex justify-between pb-10">
        <div className="w-1/3">
          <img className="h-10 mb-3" src={assets.logo} alt="" />
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nostrum, vitae. amet consectetur, adipisicing
            elit. Vel nesciunt numquam, expedita distinctio reprehenderit animi.
          </p>
        </div>
        <div>
          <h1 className="text-xl mb-3 font-medium">COMPANY</h1>
          <div className="text-gray-600 text-sm flex flex-col gap-1">
            <p>Home</p>
            <p>About Us</p>
            <p>Delivery</p>
            <p>Privacy Policy</p>
          </div>
        </div>
        <div>
          <h1 className="text-xl mb-3 font-medium">GET IN TOUCH</h1>
          <div className="flex flex-col gap-1 text-sm text-gray-600">
            <p>+1-212-456-7890</p>
            <p>contact@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="border-t py-4 text-center text-sm">
        Copyright 2024@ forever.com - All Right Reserved
      </div>
    </div>
  );
};
