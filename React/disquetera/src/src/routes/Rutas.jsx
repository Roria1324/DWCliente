import React from "react"
import { Routes, Route } from "react-router-dom"

import DetallesDisco from "../pages/DetallesDisco.jsx"
import Error from "../pages/Error.jsx"
import Inicio from "../pages/Inicio.jsx"
import InsertarDisco from "../pages/InsertarDisco.jsx"
import ListarDisco from "../pages/ListarDisco.jsx"

const Rutas = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/insertar-disco" element={<InsertarDisco />} />
                <Route path="/listar-disco" element={<ListarDisco />} />
                <Route path="/detalles-disco/:id" element={<DetallesDisco />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </>
    )
}

export default Rutas
