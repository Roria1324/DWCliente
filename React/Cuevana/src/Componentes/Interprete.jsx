import React from "react";
import "./Interprete.css";

const Interprete = (props) => {

    return (
        <>
            <div className="interprete-first">
            <h1>{props.nombre}</h1>
            <img src={props.foto} alt="imagen"/>
            <p>{props.children}</p>
            </div>
        </>
    )
}

export default Interprete