import React, { useContext, useEffect, useState } from "react";
import { Title } from "./Title";
import { products } from "../assets/assets";
import { ProductItem } from "./ProductItem";
import { Sort } from "./Sort";
import { ShopContext } from "../context/ShopContext";

export const AllCollection = ({applyFilter}) => {
  const {filteredProducts} = useContext(ShopContext)
  return (
    <div>
      <div className="text-2xl mb-3 flex justify-between items-center">
        <Title text1={"ALL"} text2={"COLLECTION"} />
        <Sort filteredProducts={filteredProducts} applyFilter={applyFilter} />
      </div>

      <div className="grid grid-cols-4 gap-x-4 gap-y-6">
        {filteredProducts.map((item, index) => {
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
