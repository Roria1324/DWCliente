import React from "react";
import "./Pelicula.css";

const Pelicula = (props) => {

    return (
        <>
            <div className="pelicula-first">
                <div className="pelicula-imagen"><img src={props.foto} alt="imagen" className="pelicula-imagen"/></div>
                <div className="pelicula-contenido">
                    <h1 className="pelicula-nombre">{props.nameFilm}</h1>
                    <h2 className="pelicula-director">{props.director}</h2>
                    <p className="pelicula-sinopsis">{props.children}</p>
                </div>
            </div>
        </>
    )
}

export default Pelicula