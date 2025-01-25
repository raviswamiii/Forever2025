import React, { useContext, useEffect, useState } from "react";
import { AllCollection } from "./AllCollection";
import { products } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";

export const Filter = () => {
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const { filteredProducts, setFilteredProducts } = useContext(ShopContext);
  
  const categoryFunction = (e) => {
    if (!category.includes(e.target.value)) {
      setCategory((prev) => [...prev, e.target.value]);
      console.log(category);
    } else {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
      console.log(category);
    }
  };

  const subCategoryFunction = (e) => {
    if (!subCategory.includes(e.target.value)) {
      setSubCategory((prev) => [...prev, e.target.value]);
      console.log(subCategory);
    } else {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
      console.log(subCategory);
    }
  };

  const applyFilter = () => {
    let productsCopy = products;

    if (category.length > 0) {
      productsCopy = products.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      productsCopy = products.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    setFilteredProducts(productsCopy);
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory]);
  
  return (
    <div className="flex gap-10 pt-10">
      <div className="min-w-[18vw] mt-3">
        <p className="text-xl mb-5">FILTERS</p>
        <div className="border px-4 py-3 mb-5">
          <p className="text-sm font-medium mb-2">CATEGORIES</p>
          <div className="flex items-center gap-2 text-sm text-gray-700 font-light mb-2">
            <input onChange={categoryFunction} type="checkbox" value={"Men"} />
            <p>Men</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-700 font-light mb-2">
            <input
              onChange={categoryFunction}
              type="checkbox"
              value={"Women"}
            />
            <p>Women</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-700 font-light mb-2">
            <input onChange={categoryFunction} type="checkbox" value={"Kids"} />
            <p>Kids</p>
          </div>
        </div>
        <div className="border px-4 py-3 mb-5">
          <p className="text-sm font-medium mb-2">TYPE</p>
          <div className="flex items-center gap-2 text-sm text-gray-700 font-light mb-2">
            <input
              onChange={subCategoryFunction}
              value={"Topwear"}
              type="checkbox"
            />
            <p>Topwear</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-700 font-light mb-2">
            <input
              onChange={subCategoryFunction}
              value={"Bottomwear"}
              type="checkbox"
            />
            <p>Bottomwear</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-700 font-light mb-2">
            <input
              onChange={subCategoryFunction}
              value={"Winterwear"}
              type="checkbox"
            />
            <p>Winterwear</p>
          </div>
        </div>
      </div>

      <AllCollection filteredProducts={filteredProducts} applyFilter={applyFilter} />
    </div>
  );
};
