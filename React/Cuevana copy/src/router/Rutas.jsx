import React from "react";
import {Routes, Route} from "react-router-dom";

const Rutas = () => {
    return (
        <>
        <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/acerca-de' element={<AcercaDe />} />
            <Route path='/discentes' element={<Productos />} />
        </Routes>
        </>
    );
};
