import React from "react"
import "./Notificacion.css"

const Notificacion = (props) => {
    return <p className={props.clase}>{props.texto}</p>
}

export default Notificacion
