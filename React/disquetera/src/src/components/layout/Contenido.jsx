import React from "react"
import Rutas from "../../routes/Rutas.jsx"
import "./Contenido.css"
import ProveedorDiscos from "../../context/ProveedorDiscos.jsx"

const Contenido = () => {
    return (
        <ProveedorDiscos>
            <div className="contenido">
                <Rutas />
            </div>
        </ProveedorDiscos>
    )
}

export default Contenido
