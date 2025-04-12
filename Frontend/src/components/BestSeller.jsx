import React, { useContext, useEffect, useState } from "react";
import { Title } from "./Title";
// import { products } from "../assets/assets";
import { ProductItem } from "./ProductItem";
import { ShopContext } from "../context/ShopContext";

export const BestSeller = () => {
  const {products} = useContext(ShopContext)
  const [bestSeller, setBestSeller] = useState([]);
  const allProducts = products;
  const bestProducts = allProducts.filter((item) => item.bestseller);

  useEffect(() => {
    setBestSeller(bestProducts.slice(0, 5));
  }, [products]);

  return (
    <div className="mt-16">
      <div className="flex flex-col mb-8 items-center text-2xl">
        <Title text1={"BEST"} text2={"SELLER"} />
        <p className="m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
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
