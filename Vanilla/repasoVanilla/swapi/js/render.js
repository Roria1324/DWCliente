"use strict"

import { plantillaPlanetaRandom, plantillaPlanetaColeccion } from "./plantillas.js"
import { obtenerPlanetasStorage } from "./localStorage.js"

const mostrarPlanetaImportado = (planeta, contenedor) => {
    const plantilla = plantillaPlanetaRandom(planeta)
    contenedor.innerHTML = plantilla
}

const cargarPlanetasGuardados = (contenedor) => {
    const planetas = obtenerPlanetasStorage()

    let html = ""

    if (planetas.length) {
        html = `<div class="planetList">`

        planetas.map((planeta) => {
            html = html.concat(plantillaPlanetaColeccion(planeta))
        })

        html.concat("</div>")
    } else {
        html = `<p class="alertMessage">Tu colección está vacía. ¡Añade planetas!</p>`
    }

    contenedor.innerHTML = html
}

export { mostrarPlanetaImportado, cargarPlanetasGuardados }
