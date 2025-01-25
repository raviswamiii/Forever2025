import React from "react";
import { Title } from "../components/Title";
import { assets } from "../assets/assets";
import { NewsLetterBox } from "../components/NewsLetterBox";

export const Contact = () => {
  return (
    <div className="border-t">
      <div className="flex flex-col items-center pb-10">
        <div className="text-2xl py-10">
          <Title text1={"CONTACT"} text2={"US"} />
        </div>
        <div className="flex gap-10 items-center ">
          <img className=" h-[70vh]" src={assets.contact_img} alt="" />
          <div className="text-gray-700">
            <p className="text-xl font-semibold mb-5">Our Store</p>
            <p>54709 Willms Station</p>
            <p className="mb-5">Suite 350, Washington, USA</p>
            <p>Tel: (415) 555-0132</p>
            <p>Email: admin@forever.com</p>
            <p className="my-5 text-xl font-semibold">Careers at Forever</p>
            <p>Learn more about our teams and job openings.</p>
            <button className="border border-black hover:bg-black hover:text-white py-4 px-8 mt-5 text-black text-sm transition-all duration-500">
              Explore Jobs
            </button>
          </div>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};
