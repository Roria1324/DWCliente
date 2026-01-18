"use strict"
import {Route, Routes} from "react-router-dom"
import React from 'react'
import Inicio from "../componentes/menu/Inicio.jsx"
import Formulario from "../componentes/formulario/Formulario.jsx"
import VerDiscos from "../componentes/formulario/VerDiscos.jsx"
import VerInfo from "../componentes/formulario/VerInfo.jsx"

const Rutas = () => {
  return (
    <Routes>
        <Route path="/" element={<Inicio/>}></Route>
        <Route path="/addDiscos" element={<Formulario/>}></Route>
        <Route path="/verDiscos" element={<VerDiscos/>}></Route>
        <Route path='/verInfo/:id' element={<VerInfo/>}></Route>
        <Route path="/editarDisco/:id" element={<Formulario />}></Route>
    </Routes>
  )
}

export default Rutas