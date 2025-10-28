"use strict"
 import pelicula from "../../Data/ElencoPelicula.json"
 import { Link } from "react-router-dom"
import "./Peliculas.css"

//Componente que muestra brevemente la cartelera de las películas que hay y si se selecciona el botón "Ver detalles", nos mostrara la película más detallada.
const Peliculas = () => {

    const peli = pelicula.peliculas 

    return (
        <>
        {<div className="peliculas-listado">
            {peli.map((v, i) => (
                <div key={v.id} className="peliculas-card">
                    <img src={v.fotoPelicula} alt={v.nombrePelicula} className="pelicula-foto" />
                    <h3>{v.nombrePelicula}</h3>
                    <p>Año: {v.year}</p>
                    <Link to={`/peliculas/${v.id}`} >Ver detalles</Link>
                </div>
            ))}
        </div>}
        </>
    )
} 

export default Peliculas