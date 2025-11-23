"use strict"
import {Route, Routes} from "react-router-dom"
import React from 'react'
import Inicio from "../Menu/Inicio.jsx"
import Formulario from "../Formulario/Formulario.jsx"
import VerDiscos from "../Formulario/VerDiscos.jsx"
import VerInfo from "../Formulario/VerInfo.jsx"

const Rutas = () => {
  return (
    <Routes>
        <Route path="/" element={<Inicio/>}></Route>
        <Route path="/addDiscos" element={<Formulario/>}></Route>
        <Route path="/verDiscos" element={<VerDiscos/>}></Route>
        <Route path='/verInfo/:id' element={<VerInfo/>}></Route>
    </Routes>
  )
}

export default Rutas