import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { backendUrl, currency } from "../App";

export const List = ({token}) => {
  const [list, setList] = useState([]);

  const fetchProductList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");
      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const removeProduct = async(id) => {
    try {
      const response = await axios.post(backendUrl + "/api/product/remove", {id}, {headers: {token}});
      if (response.data.success) {
        toast.success(response.data.message);
        fetchProductList()
      } else {
        toast.error(response.error.message)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  useEffect(() => {
    fetchProductList();
  }, []);
  return (
    <div className="sm:px-16 sm:py-8 p-4 sm:w-full w-[82%]">
      <p className="text-gray-600 mb-2">Products List</p>
      <div className="hidden sm:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] w-full bg-gray-100 px-2 py-1 text-gray-600 font-semibold sm:text-sm text-xs border mb-2">
        <p>Image</p>
        <p>Name</p>
        <p>Category</p>
        <p className="sm:pl-7">Price</p>
        <p>Remove</p>
      </div>

      {list.map((item, index) => (
        <div
          key={index}
          className="border grid sm:grid-cols-[0.5fr_3fr_1fr_1fr_1fr] grid-cols-[1.5fr_2fr_1.5fr_1fr_1fr] items-center text-gray-600 p-2 sm:text-sm mb-2  text-xs leading-[13px]"
        >
          <img className="sm:w-12 w-[13vw]" src={item.image[0]} alt="" />
          <p className="sm:pl-12">{item.name}</p>
          <p className="sm:pl-12">{item.category}</p>
          <p className="sm:pl-12">
            {currency}
            {item.price}
          </p>
          <p onClick={()=>removeProduct(item._id)} className="sm:pl-7 pl-5 cursor-pointer">X</p>
        </div>
      ))}
    </div>
  );
};
