import React, { useEffect } from "react";
import { Navbar } from "../src/components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import { Add } from "./pages/Add";
import { List } from "./pages/List";
import { Orders } from "./pages/Orders";
import { useState } from "react";
import { Login } from "./components/Login";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export const backendUrl = import.meta.env.VITE_BACKEND_URL;

export const currency = "$"

export const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token")?localStorage.getItem("token") : "");

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  return (
    <div>
      <ToastContainer />
      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <div className="bg-gray-50">
          <Navbar setToken={setToken} />
          <hr />
          <div className="flex">
            <Sidebar />
            <Routes>
              <Route path="/add" element={<Add token={token}/>} />
              <Route path="/list" element={<List token={token} />} />
              <Route path="/orders" element={<Orders token={token} />} />
            </Routes>
          </div>
        </div>
      )}
    </div>
  );
};
