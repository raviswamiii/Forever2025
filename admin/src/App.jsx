import React from "react";
import { Navbar } from "../src/components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import { Add } from "./pages/Add";
import { List } from "./pages/List";
import { Orders } from "./pages/Orders";

export const App = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <hr />
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add />} />
          <Route path="/list" element={<List />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </div>
  );
};
