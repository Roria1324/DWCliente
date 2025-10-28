import React from "react";
import "./PeliculaDetalles.css";
import peliculas from "../../Data/ElencoPelicula.json"
import Taquilla from '../UseRef/Taquilla.jsx'
import Interprete from '../UseRef/Interprete.jsx'
import Contenedor from '../Contenedor.jsx'
import { useParams } from "react-router-dom";

const PeliculaDetalles = () => {

    const {id} = useParams()
    const pelicula = peliculas.peliculas.find((p) => p.id === parseInt(id))

    return (
        <>
        <div className="pelicula-first">
            <div className="pelicula-imagen">
                <img src={pelicula.fotoPelicula} alt={pelicula.nombrePelicula} className="pelicula-imagen"/>
            </div>
            <div className="pelicula-contenido">
                <h1 className="pelicula-nombre">{pelicula.nombrePelicula}</h1>
                <h2 className="pelicula-director">{pelicula.directorPelicula}</h2>
                <p className="pelicula-sinopsis">{pelicula.sinopsis}</p>
            <Contenedor> 
                <Interprete elenco={pelicula.elencoPelicula}/>
                <Taquilla />
            </Contenedor>
            </div>
        </div>
        </>
    )
}

export default PeliculaDetalles