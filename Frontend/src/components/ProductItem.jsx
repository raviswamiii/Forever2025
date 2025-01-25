import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

export const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);
  return (
    <Link to={`/product/${id}`} className="text-sm font-medium text-gray-600">
      <div className="overflow-hidden">
        <img
          className="hover:scale-110 transition ease-in-out"
          src={image[0]}
          alt=""
        />
      </div>
      <p className="pt-3 mb-1">{name}</p>
      <p className="text-gray-800">
        {currency}
        {price}
      </p>
    </Link>
  );
};
