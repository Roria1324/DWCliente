import React from "react";
import { Route, Routes } from "react-router-dom";
import Start from "../pages/Start.jsx";
import Products from "../pages/Products.jsx";
import LogIn from "../pages/LogIn.jsx";
import RegistrerUser from "../pages/RegistrerUser.jsx";
const Router = () => {

  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/logIn" element={<LogIn />} />
      <Route path="/register" element={<RegistrerUser />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
};

export default Router;
