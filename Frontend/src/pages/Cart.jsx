import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";
import { Title } from "../components/Title";
import { CartTotal } from "../components/CartTotal";

export const Cart = () => {
  const { cartItems, currency, updateQuantity, navigate, products } =
    useContext(ShopContext);
  const [productData, setProductData] = useState([]);
  const allProducts = products;

  const fetchCartItems = () => {
   if(products.length > 0) {
    let emptyArray = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          emptyArray.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setProductData(emptyArray);
  };
   }

  useEffect(() => {
    fetchCartItems();
  }, [cartItems, products]);

  return (
    <div>
      <div className="text-xl sm:mt-14 border-b sm:pb-5">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>
      {productData.map((items, index) => {
        const cartData = allProducts.find(
          (product) => product._id === items._id
        );

        return (
          <div
            key={index}
            className="flex justify-between sm:items-center items-end py-2 sm:py-4 border-b"
          >
            <div className="flex gap-3 sm:gap-6">
              <img className="h-[20vw] sm:h-auto w-[20vw] sm:w-20" src={cartData.image[0]} alt="" />
              <div className="text-gray-700">
                <p className="text-xs sm:text-lg font-medium sm:mb-4 mb-3">{cartData.name}</p>
                <div className="flex sm:gap-5 gap-3 items-center ">
                  <p>
                    {currency}
                    {cartData.price}
                  </p>
                  <p className="border sm:px-3 sm:py-1 px-1 py-0 bg-gray-100 text-sm">{items.size}</p>
                </div>
              </div>
            </div>
            <input
              onChange={(e) =>
                e.target.value === "" || e.target.value === "0"
                  ? null
                  : updateQuantity(
                      items._id,
                      items.size,
                      Number(e.target.value)
                    )
              }
              className="border max-w-10 sm:max-w-20 px-1 sm:px-2 mr-5 mb-2"
              type="number"
              min={1}
              defaultValue={items.quantity}
            />
            <img
              onClick={() => updateQuantity(items._id, items.size, 0)}
              className="h-5 cursor-pointer mb-2 sm:mr-8"
              src={assets.bin_icon}
              alt=""
            />
          </div>
        );
      })}
      <div className="flex justify-end sm:mt-20 mt-28 ">
        <div className="sm:w-[35vw] w-full">
          <CartTotal />
          <div className="w-full text-end" onClick={() => navigate("/place-order")}>
            <button className="bg-black text-white text-sm my-8 px-8 py-3">
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
