import React from "react";
import { Route, Routes } from "react-router-dom";
import Start from "../pages/Start";
import Products from "../pages/Products";
import LogIn from "../pages/LogIn";
import RegistrerUser from "../pages/RegistrerUser";
const Route = () => {
  return (
    <Routes>
      <Route path="/" element={<Start />}>
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/register" element={<RegistrerUser />} />
      </Route>
      <Route path="/products" element={<Products />} />
    </Routes>
  );
};

export default Route;
