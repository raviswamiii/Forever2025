import React, { useEffect } from "react";
import { Navbar } from "../src/components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { Routes, Route, Navigate } from "react-router-dom";
import { Add } from "./pages/Add";
import { List } from "./pages/List";
import { Orders } from "./pages/Orders";
import { useState } from "react";
import { Login } from "./components/Login";
import { Layout } from "./components/Layout"
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export const backendUrl = import.meta.env.VITE_BACKEND_URL;

export const currency = "$";

export const App = () => {
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : "",
  );

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  return (
    <div>
      <ToastContainer />
      <Routes>
        {!token ? (
          <Route path="*" element={<Login setToken={setToken} />} />
        ) : (
          <>
            <Route path="/" element={<Navigate to="/add" />} />

            <Route
              path="/add"
              element={
                <Layout setToken={setToken}>
                  <Add token={token} />
                </Layout>
              }
            />
            <Route
              path="/list"
              element={
                <Layout setToken={setToken}>
                  <List token={token} />
                </Layout>
              }
            />
            <Route
              path="/orders"
              element={
                <Layout setToken={setToken}>
                  <Orders token={token} />
                </Layout>
              }
            />
          </>
        )}
      </Routes>
    </div>
  );
};
