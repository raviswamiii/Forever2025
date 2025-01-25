import React, { useEffect, useState } from "react";
import { Title } from "./Title";
import { products } from "../assets/assets";
import { ProductItem } from "./ProductItem";
export const LatestCollection = () => {
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, []);
  return (
    <div className="mt-16">
      <div className="flex flex-col gap-2 items-center mb-8 text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTION"} />
        <p className="text-gray-600 font-medium text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          autem?
        </p>
      </div>

      <div className="grid grid-cols-5 gap-x-4 gap-y-6">
        {latestProducts.map((item, index) => {
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
