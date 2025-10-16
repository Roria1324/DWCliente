import React from "react";
import { Routes, Route } from "react-router-dom";
import Inicio from "./../pages/Inicio.jsx";
import Contacto from "./../pages/Contacto.jsx";
import AcercaDe from "./../pages/AcercaDe.jsx";
import Discentes from "../pages/Discentes.jsx";

const Rutas = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/acerca-de' element={<AcercaDe />} />
        <Route path='/discentes' element={<Discentes />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  );
};

export default Rutas;
