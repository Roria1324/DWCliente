import React from "react";
import { Route, Routes } from "react-router-dom";
import Start from "../pages/Start.jsx";
import Products from "../pages/Products.jsx";
import LogIn from "../pages/LogIn.jsx";
import RegistrerUser from "../pages/RegistrerUser.jsx";
import AddProducts from "../pages/AddProducts.jsx";
import ShopList from "../pages/ShopList.jsx";
import EditRol from "../pages/EditRol.jsx";
import Profile from "../pages/Profile.jsx";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/logIn" element={<LogIn />} />
      <Route path="/register" element={<RegistrerUser />} />
      <Route path="/products" element={<Products />} />
      <Route path="/createProduct" element={<AddProducts />} />
      <Route path="/createProduct/:id" element={<AddProducts />} />
      <Route path="/shoplist" element={<ShopList />} />
      <Route path="/editrole" element={<EditRol />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default Router;
