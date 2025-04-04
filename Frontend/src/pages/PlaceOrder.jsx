import React, { useContext, useState } from "react";
import { Title } from "../components/Title";
import { CartTotal } from "../components/CartTotal";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

export const PlaceOrder = () => {
  const [currentState, setCurrentState] = useState("cod");
  const { navigate, backend_url, cartItems, products, getCartAmount, delivery_fee, token, setCartItems } =
    useContext(ShopContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log("Button clicked")
    try {
      let orderItems = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(products.find((product) => product._id === items));
            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];
              orderItems.push(itemInfo)
            }
          }
        }
      }

      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee
      }
  
      switch (method) {
        case "cod":
          const response = await axios.post(backend_url + "/api/order/place", orderData, {headers: {token}})
          console.log(response.data)
          if (response.data.success) {
            setCartItems({})
          } else {
            toast.error(response.data.message)
          }
          break;
      
        default:
          break;
      }

      
    } catch (error) {}
  };
  return (
    <div className="mt-10">
      <div className="text-2xl mb-10">
        <Title text1={"DELIVERY"} text2={"INFORMATION"} />
      </div>
      <form onSubmit={onSubmitHandler} className="flex justify-between">
        <div className="flex flex-col gap-4 w-[36vw]">
          <div className="flex gap-3">
            <input
              required
              onChange={onChangeHandler}
              name="firstName"
              value={formData.firstName}
              className="border rounded px-3 py-1 border-gray-300 w-full"
              type="text"
              placeholder="First name"
            />
            <input
              required
              onChange={onChangeHandler}
              name="lastName"
              value={formData.lastName}
              className="border rounded px-3 py-1 border-gray-300 w-full"
              type="text"
              placeholder="Last name"
            />
          </div>
          <input
            required
            onChange={onChangeHandler}
            name="email"
            value={formData.email}
            className="border rounded px-3 py-1 border-gray-300 w-full"
            type="email"
            placeholder="Email address"
          />
          <input
            required
            onChange={onChangeHandler}
            name="street"
            value={formData.street}
            className="border rounded px-3 py-1 border-gray-300 w-full"
            type="text"
            placeholder="Street"
          />
          <div className="flex gap-3">
            <input
              required
              onChange={onChangeHandler}
              name="city"
              value={formData.city}
              className="border rounded px-3 py-1 border-gray-300 w-full"
              type="text"
              placeholder="City"
            />
            <input
              required
              onChange={onChangeHandler}
              name="state"
              value={formData.state}
              className="border rounded px-3 py-1 border-gray-300 w-full"
              type="text"
              placeholder="State"
            />
          </div>
          <div className="flex gap-3">
            <input
              required
              onChange={onChangeHandler}
              name="zipcode"
              value={formData.zipcode}
              className="border rounded px-3 py-1 border-gray-300 w-full"
              type="number"
              placeholder="Zipcode"
            />
            <input
              required
              onChange={onChangeHandler}
              name="country"
              value={formData.country}
              className="border rounded px-3 py-1 border-gray-300 w-full"
              type="text"
              placeholder="Country"
            />
          </div>
          <input
            required
            onChange={onChangeHandler}
            name="phone"
            value={formData.phone}
            className="border rounded px-3 py-1 border-gray-300"
            type="number"
            placeholder="Phone"
          />
        </div>
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
            // onClick={() => navigate("/orders")}
            className="flex justify-end"
            to={"/place-order"}
          >
            <button
              type="submit"
              className="bg-red-800 text-white px-4 py-3 text-sm text-center w-[15vw] mt-10"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
