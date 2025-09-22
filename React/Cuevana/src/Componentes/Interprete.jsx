import React from "react";
import "./Interprete.css";

const Interprete = (props) => {

    return (
        <>
            <div className="interprete-first">
                <div className="foto"><img src={props.foto} alt="imagen"/></div>
                <div className="info">
                    <div className="nombre"><h1>{props.nombre}</h1></div>
                    <div><p>{props.bibliografía}</p></div>
                </div>
            </div>
        </>
    )
}

export default Interprete