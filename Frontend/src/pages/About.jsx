import React from "react";
import { Title } from "../components/Title";
import { assets } from "../assets/assets";
import { NewsLetterBox } from "../components/NewsLetterBox";

export const About = () => {
  return (
    <div className="border-t">
      <div className="text-2xl py-10">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="flex gap-14  items-center">
        <img className="w-1/2 h-[70vh]" src={assets.about_img} alt="" />
        <div className="flex flex-col gap-8 text-gray-700">
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
          <p className="font-bold">Our Mission</p>
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
        <div className="flex pb-10">
          <div className="border text-sm p-20">
            <p className="font-bold mb-5">Quality Assurance:</p>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
              illum iste sunt? Iste neque amet similique rerum cum distinctio?
              Similique.
            </p>
          </div>
          <div className="border-y border-r text-sm  p-20">
            <p className="font-bold mb-5">Convenience:</p>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
              illum iste sunt? Iste neque amet similique rerum cum distinctio?
              Similique.
            </p>
          </div>
          <div className="border-y border-r text-sm  p-20">
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
