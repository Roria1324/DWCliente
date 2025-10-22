import React from "react";
import "./Pelicula.css";
import peliculas from "../../Data/ElencoPelicula.json"
import Taquilla from '../UseRef/Taquilla.jsx'
import Interprete from '../UseRef/Interprete.jsx'
import Contenedor from '../Contenedor.jsx'

const Pelicula = () => {

    return (
        <>
        
        <div className="pelicula-first">
            {peliculas.peliculas.map((v, i) => (
                <>
                <div key={i} className="pelicula-imagen"><img src={v.fotoPelicula} alt="imagen" className="pelicula-imagen"/></div>
                <div className="pelicula-contenido">
                    <h1 className="pelicula-nombre">{v.nombrePelicula}</h1>
                    <h2 className="pelicula-director">{v.directorPelicula}</h2>
                    <p className="pelicula-sinopsis">{v.sinopsis}</p>
                <Contenedor> 
                    <Interprete/>
                    <Taquilla>110.000$ anuales.</Taquilla>
                </Contenedor>
                </div>
                </>
            ))}
            
        </div>
        
        </>
    )
}

export default Pelicula