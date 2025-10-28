import React from "react";
import {Routes, Route} from "react-router-dom"
import Inicio from "../Componentes/Paginas/Inicio.jsx"
import Contacto from "../Componentes/Paginas/Contacto.jsx"
import AcercaDe from "../Componentes/Paginas/AcercaDe.jsx"
import Error from "../Componentes/Paginas/Error.jsx"
import PeliculaDetalles from "../Componentes/Paginas/PeliculaDetalles.jsx";
import Peliculas from "../Componentes/Paginas/Peliculas.jsx"; 
import Actores from "../Componentes/Paginas/Actores.jsx";

const Rutas = () => {
    return (
        <>
        <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/acerca-de' element={<AcercaDe />} />
            <Route path='/peliculas' element={<Peliculas />} />
            <Route path='/peliculas/:id' element={<PeliculaDetalles />} />
            <Route path='/actores' element={<Actores/>}/>
            <Route path='*' element={<Error />} />
        </Routes>
        </>
    );
};

export default Rutas
