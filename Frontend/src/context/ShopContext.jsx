import { createContext, useEffect } from "react";
import { useState } from "react";
// import { products } from "../assets/assets";
import {toast} from "react-toastify"
import { useNavigate } from "react-router-dom";
import axios from "axios"

export const ShopContext = createContext();

export const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const backend_url = import.meta.env.VITE_BACKEND_URL
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [visible, setVisible] = useState(false);
  const [search, setSearch] = useState("");
  const [showSearchBar, setShowSearchBar] = useState(false)
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState('')
  const navigate = useNavigate();

  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Size is not selected.")
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

    if(token) {
      try {
        await axios.post(backend_url + "/api/cart/add", {itemId, size}, {headers: {token}})
      } catch (error) {
        console.log(error)
        toast.error(error.message)
      }
    }
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

  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData);

    if(token) {
      try {
        await axios.post(backend_url + "/api/cart/update", {itemId, size, quantity}, {headers: {token}})
      } catch (error) {
        console.log(error)
        toast.error(error.message)
      }
    }
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      const itemInfo = products.find((product) => product._id === items);
      for (const item in cartItems[items]) {
       try {
        if (cartItems[items][item] > 0) {
          totalAmount += itemInfo.price * cartItems[items][item];
        }
       } catch (error) {
        
       }
      }
    }
    return totalAmount;
  };

  const getProductList = async () => {
    try {
      const response = await axios.get(backend_url + "/api/product/list")
      if (response.data.success) {
        setProducts(response.data.products)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const getUserCart = async (token) => {
    try {
      const response = await axios.post(backend_url + "/api/cart/get", {}, {headers:{token}})
      if(response.data.success){
        setCartItems(response.data.cartData)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(()=>{
    getProductList()
  },[])

  useEffect(()=>{
    if(!token && localStorage.getItem("token")){
      setToken(localStorage.getItem("token"))
      getUserCart(localStorage.getItem("token"))
    }
  },[])

  const value = {
    currency,
    filteredProducts,
    setFilteredProducts,
    visible,
    setVisible,
    search,
    setSearch,
    showSearchBar,
    setShowSearchBar,
    addToCart,
    cartItems,
    setCartItems,
    getCartCount,
    updateQuantity,
    delivery_fee,
    getCartAmount,
    navigate,
    products,
    token,
    setToken,
    backend_url
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};
