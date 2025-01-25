import React, { useContext, useState } from "react";
import { Title } from "../components/Title";
import { CartTotal } from "../components/CartTotal";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

export const PlaceOrder = () => {
  const [currentState, setCurrentState] = useState("cod");
  const { navigate } = useContext(ShopContext);
  return (
    <div className="mt-10">
      <div className="text-2xl mb-10">
        <Title text1={"DELIVERY"} text2={"INFORMATION"} />
      </div>
      <div className="flex justify-between">
        <form className="flex flex-col gap-4 w-[36vw]">
          <div className="flex gap-3">
            <input
              className="border rounded px-3 py-1 border-gray-300 w-full"
              type="text"
              placeholder="First name"
            />
            <input
              className="border rounded px-3 py-1 border-gray-300 w-full"
              type="text"
              placeholder="Last name"
            />
          </div>
          <input
            className="border rounded px-3 py-1 border-gray-300 w-full"
            type="email"
            placeholder="Email address"
          />
          <input
            className="border rounded px-3 py-1 border-gray-300 w-full"
            type="text"
            placeholder="Street"
          />
          <div className="flex gap-3">
            <input
              className="border rounded px-3 py-1 border-gray-300 w-full"
              type="text"
              placeholder="City"
            />
            <input
              className="border rounded px-3 py-1 border-gray-300 w-full"
              type="text"
              placeholder="State"
            />
          </div>
          <div className="flex gap-3">
            <input
              className="border rounded px-3 py-1 border-gray-300 w-full"
              type="number"
              placeholder="Zipcode"
            />
            <input
              className="border rounded px-3 py-1 border-gray-300 w-full"
              type="text"
              placeholder="Country"
            />
          </div>
          <input
            className="border rounded px-3 py-1 border-gray-300"
            type="number"
            placeholder="Phone"
          />
        </form>
        <div className="w-[40vw]">
          <CartTotal />

          <div className="mt-10">
            <div className="ml-9 mb-3">
              <Title text1={"PAYMENT"} text2={"METHOD"} />
            </div>
            <div className="flex justify-end">
              <div className="flex gap-3">
                <div
                  onClick={() => setCurrentState("stripe")}
                  className="flex items-center border px-3 py-2 cursor-pointer"
                >
                  <p
                    className={`rounded-full p-1.5 border ${
                      currentState === "stripe" ? "bg-green-400" : ""
                    }`}
                  ></p>
                  <img className="h-5 ml-8" src={assets.stripe_logo} alt="" />
                </div>
                <div
                  onClick={() => setCurrentState("razorpay")}
                  className="flex items-center border px-3 py-2 cursor-pointer"
                >
                  <p
                    className={`rounded-full p-1.5 border ${
                      currentState === "razorpay" ? "bg-green-400" : ""
                    }`}
                  ></p>
                  <img className="h-5 ml-8" src={assets.razorpay_logo} alt="" />
                </div>
                <div
                  onClick={() => setCurrentState("cod")}
                  className="flex items-center border px-3 py-2 cursor-pointer"
                >
                  <p
                    className={`rounded-full p-1.5 border ${
                      currentState === "cod" ? "bg-green-400" : ""
                    }`}
                  ></p>
                  <p className="ml-8 text-sm text-gray-500 font-medium">
                    CAST ON DELIVERY
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            onClick={() => navigate("/orders")}
            className="flex justify-end"
            to={"/place-order"}
          >
            <button className="bg-black text-white px-4 py-3 text-sm text-center w-[15vw] mt-10">
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
