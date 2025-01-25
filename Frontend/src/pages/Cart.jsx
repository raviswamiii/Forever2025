import React, { useContext, useEffect, useState } from "react";
import { assets, products } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";
import { Title } from "../components/Title";
import { CartTotal } from "../components/CartTotal";

export const Cart = () => {
  const { cartItems, currency, updateQuantity, navigate } =
    useContext(ShopContext);
  const [productData, setProductData] = useState([]);
  const allProducts = products;

  const fetchCartItems = () => {
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

  useEffect(() => {
    fetchCartItems();
  }, [cartItems]);
  console.log(cartItems);

  return (
    <div>
      <div className="text-2xl mt-14 border-b pb-5">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>
      {productData.map((items, index) => {
        const cartData = allProducts.find(
          (product) => product._id === items._id
        );

        return (
          <div
            key={index}
            className="py-4 border-b flex items-center justify-between pr-16"
          >
            <div className="flex gap-6">
              <img className="h-[7vw] " src={cartData.image[0]} alt="" />
              <div className="text-gray-700">
                <p className="text-lg font-medium mb-4">{cartData.name}</p>
                <div className="flex gap-5 items-center ">
                  <p>
                    {currency}
                    {cartData.price}
                  </p>
                  <p className="border px-3 py-1 bg-gray-100">{items.size}</p>
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
              className="border px-2 py-1 w-[5vw]"
              type="number"
              min={1}
              defaultValue={items.quantity}
            />
            <img
              onClick={() => updateQuantity(items._id, items.size, 0)}
              className="h-5 cursor-pointer"
              src={assets.bin_icon}
              alt=""
            />
          </div>
        );
      })}
      <div className="flex justify-end mt-20  ">
        <div className="w-[35vw]">
          <CartTotal />
          <div onClick={() => navigate("/place-order")} className="text-end">
            <button className="bg-black text-white px-4 py-3 text-sm text-center w-[15vw] mt-10">
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
