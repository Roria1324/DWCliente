"use strict"

import { obtenerAnimesLocales } from "./storage.js"

const cargarColeccion = (contenedor) => {
    const animes = obtenerAnimesLocales()

    let html = ""

    if (animes.length > 0) {
        animes.map((anime) => {
            html = html.concat(plantillaTarjeta(anime))
        })
    } else {
        html = "No hay animes registrados"
    }
    contenedor.innerHTML = html
}

const plantillaTarjeta = (datos) => {
    let plantilla = `<div class="anime-card">
    <img src="${datos.image_url}" alt="Imágen de ${datos.title}" />
    <h3>${datos.title}</h3>
    <p>Año: ${datos.year}</p>
    <p>Generos: ${datos.genres}</p>
    <p>¿Visto?: ${datos.watched ? `Sí` : `No`}</p>
    <button id="${datos.mal_id}" class="delete-button">Borrar</button>
    </div>`

    return plantilla
}

const plantillaBorrarAnime = (id) => {
    let plantilla = `<div class="modal-backdrop">
        <div id="modal-delete" class="modal-content">
            <h4>¿Seguro que quieres borrar el anime?</h4>
            <div class="modal-buttons">
                <button id="${id}" class="modal-button confirm-delete" data-action="confirm">Sí</button>
                <button id="${id}" class="modal-button cancel-delete" data-action="cancel">No</button>
            </div>
        </div>
    </div>`

    return plantilla
}

export { cargarColeccion, plantillaBorrarAnime }
