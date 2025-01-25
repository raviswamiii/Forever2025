import React, { useContext } from "react";
import { Title } from "./Title";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

export const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);
  return (
    <div className="w-full">
      <div className="text-2xl mb-5">
        <Title text1={"CART"} text2={"TOTAL"} />
      </div>
      <div>
        <div className="flex border-b justify-between text-sm py-2">
          <p>Subtotal</p>
          <p>{currency}{getCartAmount()}.00</p>
        </div>
        <div className="flex border-b justify-between text-sm py-2">
          <p>Shipping Fee</p>
          <p>{currency}{delivery_fee}.00</p>
        </div>
        <div className="flex border-b justify-between font-bold py-2 text-sm">
          <p>Total</p>
          <p>{currency}{getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00</p>
        </div>
      </div>
      
    </div>
  );
};
