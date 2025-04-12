import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";

export const Sort = ({ applyFilter }) => {
  const [sortType, setSortType] = useState();
  const { filteredProducts, setFilteredProducts } = useContext(ShopContext);

  const sortFunction = () => {
    let productsCopy = filteredProducts.slice()
    
    if (sortType === "low-high") {
      setFilteredProducts(productsCopy.sort((a, b) => a.price - b.price));
    } else if (sortType === "high-low") {
      setFilteredProducts(productsCopy.sort((a, b) => b.price - a.price));
    } else {
      applyFilter();
    }
  };

  useEffect(() => {
    sortFunction();
  }, [sortType]);

  // const sortFunction = () => {
  //   let productsCopy = filteredProducts.slice();

  //   switch (sortType) {
  //     case "low-high":
  //       setFilteredProducts(productsCopy.sort((a, b) => a.price - b.price));
  //       break;

  //     case "high-low":
  //       setFilteredProducts(productsCopy.sort((a, b) => b.price - a.price));
  //       break;

  //     default:
  //       applyFilter();
  //       break;
  //   }
  // };

  // useEffect(() => {
  //   sortFunction();
  // }, [sortType]);

  return (
    <div>
      <select
        onChange={(e) => setSortType(e.target.value)}
        className="border-2 border-gray-300 text-sm px-2  py-1"
      >
        <option value="relavant">Sort by: Relavant</option>
        <option value="low-high">Sort by: Low to High</option>
        <option value="high-low">Sort by: High to Low</option>
      </select>
    </div>
  );
};
