import { createContext } from "react";
import { useState } from "react";
import { products } from "../assets/assets";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

export const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [visible, setVisible] = useState(false);
  const [search, setSearch] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  const addToCart = (itemId, size) => {
    if (!size) {
      alert("Size is not selected.");
      return;
    }

    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          totalCount += cartItems[items][item];
        }
      }
    }
    return totalCount;
  };

  const updateQuantity = (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData);
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      const itemInfo = products.find((product) => product._id === items);
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          totalAmount += itemInfo.price * cartItems[items][item];
        }
      }
    }
    return totalAmount;
  };

  const value = {
    currency,
    filteredProducts,
    setFilteredProducts,
    visible,
    setVisible,
    search,
    setSearch,
    addToCart,
    cartItems,
    setCartItems,
    getCartCount,
    updateQuantity,
    delivery_fee,
    getCartAmount,
    navigate
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};
