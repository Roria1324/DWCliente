"use strict"

import { traerAnimeNombre } from "./api.js"
import { actualizarFormulario, resetFormulario } from "./form.js"
import { borrarAnime, guardarAnime } from "./storage.js"
import { recogerDatos, crearJSON } from "./data.js"
import { cargarColeccion } from "./render.js"
import { esconderMensajes, modalBorrarAnime, mostrarMensajes } from "./messages.js"
import { resultadoValidaciones, validarFormulario } from "./validation.js"

window.onload = () => {
    if (typeof localStorage === undefined) console.log("No furula local storage")

    const formulario = document.getElementById("anime-form")
    const divColeccion = document.getElementById("collection-list-container")
    const divMensajes = document.getElementById("info-container")

    cargarColeccion(divColeccion)

    document.getElementById("anime-form").addEventListener("submit", (e) => e.preventDefault())

    document.getElementById("search-api-button").addEventListener("click", (e) => {
        const eventoBusqueda = async () => {
            const nombre = document.getElementById("api-search-input").value
            let anime = await traerAnimeNombre(nombre)
            anime = anime.find((anime) => anime.title.toLowerCase().includes(nombre))
            console.log(anime)
            actualizarFormulario(formulario, anime)
        }
        eventoBusqueda()
    })

    document.getElementById("save-anime-button").addEventListener("click", (e) => {
        const anime = recogerDatos(formulario)
        const resultados = resultadoValidaciones(anime)
        const valido = validarFormulario(resultados)

        if (valido) {
            guardarAnime(crearJSON(anime))
            mostrarMensajes(resultados, divMensajes)
            resetFormulario(formulario)
            cargarColeccion(divColeccion)
        } else {
            mostrarMensajes(resultados, divMensajes)
        }
    })

    document.getElementById("collection-section").addEventListener("click", (e) => {
        if (e.target.tagName !== "BUTTON") return

        if (e.target.classList.contains("delete-button")) {
            const id = Number.parseInt(e.target.id)

            modalBorrarAnime(id, divMensajes)
        }
    })

    document.getElementById("info-container").addEventListener("click", (e) => {
        if (e.target.tagName !== "BUTTON") return

        const id = Number.parseInt(e.target.id)

        if (e.target.innerText === "Sí") {
            console.log(e.target)
            console.log(id)
            borrarAnime(id)
        }
        esconderMensajes(divMensajes)
        cargarColeccion(divColeccion)
    })
} // FIN del window.onload
