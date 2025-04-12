import React, { useContext, useEffect, useState } from "react";
import { AllCollection } from "./AllCollection";
// import { products } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";

export const Filter = () => {
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const { filteredProducts, setFilteredProducts, products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  
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
    let productsCopy = [...products];

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    setFilteredProducts(productsCopy);
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, products]);
  
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* <div className="min-w-[18vw] mt-3">
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
      </div> */}

<div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS{" "}
          <img
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            src={assets.dropdown_icon}
            alt=""
          />
        </p>
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Men"}
                onChange={categoryFunction}
              />{" "}
              Men
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Women"}
                onChange={categoryFunction}
              />{" "}
              Women
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Kids"}
                onChange={categoryFunction}
              />{" "}
              Kids
            </p>
          </div>
        </div>
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Topwear"}
                onChange={subCategoryFunction}
              />{" "}
              Topwear
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Bottomwear"}
                onChange={subCategoryFunction}
              />{" "}
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Winterwear"}
                onChange={subCategoryFunction}
              />{" "}
              Winterwear
            </p>
          </div>
        </div>
      </div>

      <AllCollection filteredProducts={filteredProducts} applyFilter={applyFilter} />
    </div>
  );
};
