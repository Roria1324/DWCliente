"use strict";

const pintarPeliculas = (peliculas) => {
    let plantilla = ""

    Array.isArray(peliculas) && peliculas.length ?
        peliculas.map((pl) => {
            plantilla += `
            <ul>
                <li>${pl.episode_id} - ${pl.title} </li>
            </ul>` 
        }) : plantilla = "<h3>No se han encontrado películas en la galaxia.</h3>"

        return plantilla;
}

export default pintarPeliculas;