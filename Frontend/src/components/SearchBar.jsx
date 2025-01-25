import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets, products } from "../assets/assets";

export const SearchBar = () => {
  const {
    visible,
    setVisible,
    search,
    setSearch,
    setFilteredProducts,
  } = useContext(ShopContext);

  const searchBar = () => {
    let productsCopy = products.slice();

    if(search) {
      productsCopy = productsCopy.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
    }
    setFilteredProducts(productsCopy);
  };

  useEffect(() => {
    searchBar();
  }, [search]);

  return visible ? (
    <div className="bg-gray-50 p-5 flex justify-center border-b">
      <form className="border border-gray-400 bg-white flex w-1/2 rounded-full items-center">
        <input
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          className="rounded-l-full text-sm px-5 w-full py-2 outline-none text-gray-700"
          type="text"
          placeholder="Search"
        />
        <img
          onClick={() => setVisible(false)}
          className="h-2.5 px-4 cursor-pointer"
          src={assets.cross_icon}
          alt=""
        />
      </form>
    </div>
  ) : null;
};
