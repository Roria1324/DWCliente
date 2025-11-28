"use strict";

const pintarPeliculas = (peliculas) => {
    let plantilla = ""

    Array.isArray(peliculas) && peliculas.length ?
        peliculas.map((pl) => {
            plantilla += `
            <ul class="listado">
                <li id="${pl.episode_id}">${pl.episode_id} - ${pl.title} </li>
            </ul>` 
        }) : plantilla = "<h3>No se han encontrado películas en la galaxia.</h3>"

        return plantilla;
}

const buscar = (pelicula, id) => {
    return pelicula.find((pl) => pl.episode_id === Number(id))
}

const datosPelicula = (pelicula) =>{
    let plantilla = ""

    plantilla += `
    <h2 class="titulo">${pelicula.title}</h2>
    <p class="director">Fecha: ${new Date(pelicula.release_date).toLocaleDateString("es-ES")}</p>
    <p class="director">Director: ${pelicula.director}</p>
    <p class="productor">Productor: ${pelicula.producer}</p>
    <p class="sinopsis">${pelicula.opening_crawl}</p>`
    return plantilla;
}

export {pintarPeliculas, buscar, datosPelicula};