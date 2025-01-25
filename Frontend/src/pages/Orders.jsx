import React, { useContext, useEffect, useState } from "react";
import { Title } from "../components/Title";
import { products } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";

export const Orders = () => {
  const { currency } = useContext(ShopContext);
  return (
    <div className="mt-16">
      <div className="text-2xl border-b pb-5">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>
      <div>
        {products.slice(1, 4).map((item, index) => {
          return (
            <div
              key={index}
              className="py-4 border-b flex justify-between items-center"
            >
              <div className="flex gap-6">
                <img className="h-[7vw]" src={item.image[0]} alt="" />
                <div className="text-gray-700 flex flex-col gap-3">
                  <p className="font-medium">{item.name}</p>
                  <div className="flex gap-4">
                    <p>
                      {currency}
                      {item.price}
                    </p>
                    <p>Quantity: 1</p>
                    <p>Size: M</p>
                  </div>
                  <p className="text-sm">
                    Date:{" "}
                    <span className="text-gray-400 ml-1"> 18/Jan/2025</span>
                  </p>
                </div>
              </div>
              <div className="flex w-1/2 justify-between text-gray-700">
                <div className="flex items-center gap-2">
                  <p className="p-1 bg-green-500 rounded-full"></p>
                  <p>Ready to shop</p>
                </div>
                <div>
                  <p className="border px-4 py-2 text-sm font-medium">Track Order</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
