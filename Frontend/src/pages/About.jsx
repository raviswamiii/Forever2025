import React from "react";
import { Title } from "../components/Title";
import { assets } from "../assets/assets";
import { NewsLetterBox } from "../components/NewsLetterBox";

export const About = () => {
  return (
    <div className="border-t">
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-[450px]" src={assets.about_img} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
            dolorum voluptates minima possimus velit nobis aliquid ea, optio
            quasi officia incidunt ipsa maxime nihil sequi obcaecati ducimus
            dolores aspernatur sint.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
            dolorum voluptates minima possimus velit nobis aliquid ea, optio
            quasi officia incidunt ipsa maxime nihil sequi obcaecati ducimus
            dolores aspernatur sint.
          </p>
          <p className="text-gray-800">Our Mission</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
            amet praesentium maiores consequuntur placeat facere officia saepe
            beatae eaque possimus.
          </p>
        </div>
      </div>
      <div className="pt-14">
        <div className="text-xl pb-5">
          <Title text1={"WHY CHOOSE"} text2={"US"} />
        </div>
        <div className="flex flex-col md:flex-row text-sm mb-20">
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <p className="font-bold mb-5">Quality Assurance:</p>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
              illum iste sunt? Iste neque amet similique rerum cum distinctio?
              Similique.
            </p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <p className="font-bold mb-5">Convenience:</p>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
              illum iste sunt? Iste neque amet similique rerum cum distinctio?
              Similique.
            </p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <p className="font-bold mb-5">Exceptional Customer Service:</p>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
              illum iste sunt? Iste neque amet similique rerum cum distinctio?
              Similique.
            </p>
          </div>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  );
};
