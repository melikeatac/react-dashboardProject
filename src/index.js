import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Order from "./pages/Orders";
import Products from "./pages/Products";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/users" element={<Users />} />
      <Route path="/order" element={<Order />} />
      <Route path="/products" element={<Products />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </BrowserRouter>
);
