import React, { useContext, useEffect, useState } from "react";
import { Title } from "./Title";
// import { products } from "../assets/assets";
import { ProductItem } from "./ProductItem";
import { ShopContext } from "../context/ShopContext";
export const LatestCollection = () => {
  const {products} = useContext(ShopContext)
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);
  return (
    <div className="mt-10">
      <div className="text-center py-8 text-2xl flex flex-col justify-center items-center">
        <Title text1={"LATEST"} text2={"COLLECTION"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          autem?
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
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
