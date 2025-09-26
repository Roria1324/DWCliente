import React from "react";
import "./Interprete.css";

const Interprete = (props) => {

    return (
        <>
            <div className="interprete-container">
                <div className="interprete-name"><h1>{props.nombre}</h1></div>
            <img src={props.foto} alt="imagen"/>
            <p>{props.children}</p>
            </div>
        </>
    )
}

export default Interprete