import React, { useEffect, useState } from "react";
import { Title } from "./Title";
import { products } from "../assets/assets";
import { ProductItem } from "./ProductItem";

export const BestSeller = () => {
  const [bestSeller, setBestSeller] = useState([]);
  const allProducts = products;
  const bestProducts = allProducts.filter((item) => item.bestseller);

  useEffect(() => {
    setBestSeller(bestProducts.slice(0, 5));
  }, []);

  return (
    <div className="mt-16">
      <div className="flex flex-col gap-2 mb-8 items-center text-3xl">
        <Title text1={"BEST"} text2={"SELLER"} />
        <p className="text-gray-600 font-medium text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
          repellendus.
        </p>
      </div>

      <div className="grid grid-cols-5 gap-x-4 gap-y-6">
        {bestSeller.map((item, index) => {
          return (
            <ProductItem
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};
