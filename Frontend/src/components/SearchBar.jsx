import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets, products } from "../assets/assets";

export const SearchBar = () => {
  const {
    showSearchBar,
    setShowSearchBar,
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

  return showSearchBar ? (
    <div className="border-t border-b bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none bg-inherit text-sm"
          type="text"
          placeholder="Search"
        />
        <img className="w-4" src={assets.search_icon} alt="" />
      </div>
      <img
        onClick={() => setShowSearchBar(false)}
        className="inline w-3 cursor-pointer"
        src={assets.cross_icon}
        alt=""
      />
    </div>
  ) : null;
};
