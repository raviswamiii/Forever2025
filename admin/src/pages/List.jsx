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
    <div className="px-16 py-8 w-full">
      <p className="text-gray-600 mb-2">Products List</p>
      <div className="grid grid-cols-[1fr_3fr_1fr_1fr_1fr] bg-gray-100 w-full px-2 py-1 text-gray-600 font-semibold text-sm border mb-2">
        <p>Image</p>
        <p>Name</p>
        <p>Category</p>
        <p>Price</p>
        <p>Remove</p>
      </div>

      {list.map((item, index) => (
        <div
          key={index}
          className="border grid grid-cols-[0.5fr_3fr_1fr_1fr_1fr] items-center text-gray-600 p-2 text-sm mb-2"
        >
          <img className="w-12" src={item.image[0]} alt="" />
          <p className="pl-12">{item.name}</p>
          <p className="pl-12">{item.category}</p>
          <p className="pl-7">
            {currency}
            {item.price}
          </p>
          <p onClick={()=>removeProduct(item._id)} className="pl-7 cursor-pointer">X</p>
        </div>
      ))}
    </div>
  );
};
