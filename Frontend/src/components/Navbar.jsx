import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { NavLink, Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

export const Navbar = () => {
  const {
    setShowSearchBar,
    setVisible,
    visible,
    getCartCount,
    setToken,
    token,
    setCartItems,
    navigate,
  } = useContext(ShopContext);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };
  return (
    <div className="flex justify-between items-center py-5 font-medium">
      <Link to={"/"}>
        <img className="w-36" src={assets.logo} />
      </Link>
      <div className="hidden sm:flex text-sm font-medium gap-4 text-gray-700">
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
      <div className="flex items-center gap-4">
        <Link to={"/collection"}>
          <img
            onClick={() => setShowSearchBar(true)}
            className="w-5"
            src={assets.search_icon}
            alt=""
          />
        </Link>

        <div className="relative group">
          <img
            onClick={() => (token ? null : navigate("/login"))}
            className="w-5 cursor-pointer"
            src={assets.profile_icon}
            alt=""
          />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p onClick={()=>navigate("/orders")} className="cursor-pointer hover:text-black">Orders</p>
              <p onClick={logout} className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to={"/cart"} className=" relative">
          <img className="w-5 min-w-5" src={assets.cart_icon} alt="" />
          <p className="bg-black text-white text-[8px] h-3 w-3 rounded-full flex items-center justify-center p-2 absolute top-3 right-[-3px]">
            {getCartCount()}
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt=""
        />
        </div>

        <div
          className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
            visible ? "w-full" : "w-0"
          }`}
        >
          <div className="flex flex-col text-gray-600">
            <div
              onClick={() => setVisible(false)}
              className="flex items-center gap-4 p-3 cursor-pointer"
            >
              <img
                className="h-4 rotate-180"
                src={assets.dropdown_icon}
                alt=""
              />
              <p>Back</p>
            </div>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to="/"
            >
              HOME
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to="/collection"
            >
              COLLECTION
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to="/about"
            >
              ABOUT
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to="/contact"
            >
              CONTACT
            </NavLink>
          </div>
      </div>
    </div>
  );
};
