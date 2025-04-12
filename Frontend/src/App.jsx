import React from "react";
import { Navbar } from "./components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from "./pages/Home";
import { Collection } from "./pages/Collection";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Cart } from "./pages/Cart";
import { Footer } from "./components/Footer";
import { Login } from "./pages/Login";
import { Product } from "./pages/Product";
import { PlaceOrder } from "./pages/PlaceOrder";
import { Orders } from "./pages/Orders";
import { Verify } from "./pages/Verify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export const App = () => {
  const location = useLocation();

  return (
    <div className="px-[8vw] w-full">
      <ToastContainer />
      {location.pathname !== "/login" && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/verify" element={<Verify />} />
      </Routes>
      <Footer />
    </div>
  );
};
