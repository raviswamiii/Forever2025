import React, { useContext, useEffect, useState } from "react";
import { Title } from "../components/Title";
import { products } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

export const Orders = () => {
  const {currency, token, backend_url } = useContext(ShopContext);
  const [ordersData, setOrdersData] = useState([]);

  const loadOrderData = async () => {
    try {
      if (!token) {
        return null;
      }

      const response = await axios.post(
        backend_url + "/api/order/userorders",
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        let allOrdersItem = [];
        response.data.orders.map((order) => {
          order.items.map((item) => {
            item["status"] = order.status;
            item["payment"] = order.payment;
            item["paymentMethod"] = order.paymentMethod;
            item["date"] = order.date;
            allOrdersItem.push(item);
          });
        });
        setOrdersData(allOrdersItem.reverse());
      }
    } catch (error) {
      toast.error(respose.data.message);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);
  return (
    <div className="mt-16">
      <div className="text-2xl border-b pb-5">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>
      <div>
        {ordersData.slice(1, 4).map((item, index) => {
          return (
            <div
              key={index}
              className="py-4 border-b flex justify-between items-center"
            >
              <div className="flex gap-6">
                <img className="h-[7vw]" src={item.image[0]} alt="" />
                <div className="text-gray-700 flex flex-col gap-1">
                  <p className="font-medium">{item.name}</p>
                  <div className="flex gap-4">
                    <p>
                      {currency}
                      {item.price}
                    </p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Size: {item.size}</p>
                  </div>
                  <div>
                    <p className="text-sm">
                      Date:
                      <span className="text-gray-400 ml-1">
                        {new Date(item.date).toLocaleDateString()}
                      </span>
                    </p>
                    <p className="text-sm">
                      Payment:{" "}
                      <span className="text-gray-400">
                        {item.paymentMethod}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex w-1/2 justify-between text-gray-700">
                <div className="flex items-center gap-2">
                  <p className="p-1 bg-green-500 rounded-full"></p>
                  <p>Ready to shop</p>
                </div>
                <div>
                  <button onClick={loadOrderData} className="border px-4 py-2 text-sm font-medium">
                    Track Order
                  </button>
                </div>
              </div> 
            </div>
          );
        })}
      </div>
    </div>
  );
};
