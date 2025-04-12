import React from "react";
import { assets } from "../assets/assets";

export const Footer = () => {
  return (
    <div className="mt-[10vw]">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img className="mb-5 w-32" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
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
