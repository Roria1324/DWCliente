import React from "react"
import "./Titulo.css"

// Componente reutilizable para añadir un titulo que indica en
// página de la web nos encontramos
const Titulo = (props) => {
    return <h1 className="titulo">{props.children}</h1>
}

export default Titulo
