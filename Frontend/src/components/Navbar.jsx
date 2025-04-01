import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { NavLink, Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

export const Navbar = () => {
  const { setVisible, getCartCount, setToken, token, setCartItems, navigate} = useContext(ShopContext);

  const logout = () => {
    navigate("/login")
    localStorage.removeItem("token")
    setToken('')
    setCartItems({})
  }
  return (
    <div className="flex justify-between items-center py-5">
      <NavLink to={"/"}>
        <img className="h-11" src={assets.logo} />
      </NavLink>
      <div className="flex text-sm font-medium gap-4 text-gray-700">
        <NavLink to={"/"} className="flex flex-col items-center">
          <p>HOME</p>
          <p className="h-[1px] w-1/2 bg-gray-700 hidden "></p>
        </NavLink>
        <NavLink to={"/collection"} className="flex flex-col items-center">
          <p>COLLECTION</p>
          <p className="h-[1px] w-1/2 bg-gray-700 hidden"></p>
        </NavLink>
        <NavLink to={"/about"} className="flex flex-col items-center">
          <p>ABOUT</p>
          <p className="h-[1px] w-1/2 bg-gray-700 hidden"></p>
        </NavLink>
        <NavLink to={"/contact"} className="flex flex-col items-center">
          <p>CONTACT</p>
          <p className="h-[1px] w-1/2 bg-gray-700 hidden"></p>
        </NavLink>
      </div>
      <div className="flex gap-4">
        <Link to={'/collection'}>
        <img onClick={()=>setVisible(true)} className="h-6" src={assets.search_icon} alt="" />
        </Link>
        
        <div className="relative group">
          <img
          onClick={()=> token ? null : navigate("/login")}
            className="h-6 cursor-pointer"
            src={assets.profile_icon}
            alt=""
          />
          <div className=" absolute right-0 pt-2 hidden group-hover:block">
            <div className="bg-gray-400 px-4 py-2 rounded w-[8vw]">
              <p className="text-sm mb-1 hover:text-gray-300 cursor-pointer">My Profle</p>
              <p onClick={()=>navigate("/orders")} className="text-sm mb-1 hover:text-gray-300 cursor-pointer">Orders</p>
              <p onClick={logout} className="text-sm mb-1 hover:text-gray-300 cursor-pointer">Logout</p>
            </div>
          </div>
        </div>
        <Link to={"/cart"} className=" relative">
          <img className="h-6" src={assets.cart_icon} alt="" />
          <p className="bg-black text-white text-[8px] h-3 w-3 rounded-full flex items-center justify-center p-2 absolute top-3 right-[-3px]">
            {getCartCount()}
          </p>
        </Link>
      </div>
    </div>
  );
};
