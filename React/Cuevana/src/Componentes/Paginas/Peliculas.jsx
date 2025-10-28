"use strict" 
import peliculas from "../../Data/ElencoPelicula.json"
import {Link} from "react-router-dom"
import "./Peliculas.css"

const Peliculas = () => {

    const pelis = peliculas.peliculas

    return (
        <>
        <div className="peliculas-listado">
            {pelis.map((v, i) => (
                <div key={v.id} className="peliculas-card">
                    <img src={v.fotoPelicula} alt={v.nombrePelicula} className="pelicula-foto" />
                    <h3>{v.nombrePelicula}</h3>
                    <p>Año: {v.year}</p>
                    <Link to={`/peliculas/${v.id}`} >Ver detalles</Link>
                </div>
            ))}
        </div>
        </>
    )
}

export default Peliculas