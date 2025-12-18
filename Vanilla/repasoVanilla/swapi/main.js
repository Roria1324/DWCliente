"use strict"

import { traerDatos, traerPlanetaRandom } from "./js/api.js"
import { borrarPlaneta, guardarPlaneta } from "./js/localStorage.js"
import { cargarPlanetasGuardados, mostrarPlanetaImportado } from "./js/render.js"
import { parsePlaneta, recogerDatos } from "./js/data.js"
import { resultadosValidaciones, validarFormulario } from "./js/validation.js"
import { mostrarMensajes, mostrarModal } from "./js/messajes.js"

window.onload = () => {
    const resultadoApi = document.getElementById("apiResultContainer")
    const divColeccion = document.getElementById("planetListContainer")
    const formulario = document.getElementById("manualPlanetForm")
    const notificaciones = document.getElementById("notificationArea")

    cargarPlanetasGuardados(divColeccion)

    const cargarDatos = async () => {
        const url = "https://swapi.info/api/planets/"

        try {
            const planetas = await traerDatos(url)
            console.log(planetas)
        } catch (error) {
            console.log(error.message)
        }
    }
    cargarDatos()

    formulario.addEventListener("submit", (e) => e.preventDefault())

    document.getElementById("formContainer").addEventListener("click", (e) => {
        if (e.target.tagName !== "BUTTON") return
        console.log(formulario.planetId.value)
        const planeta = recogerDatos(formulario)
        console.log(planeta)
        const resultados = resultadosValidaciones(planeta)
        console.log(resultados)

        const valido = validarFormulario(resultados)

        if (valido) {
            mostrarMensajes(resultados, notificaciones)
            guardarPlaneta(parsePlaneta(planeta))
            console.log("Planeta valido")
        } else {
            mostrarMensajes(resultados, notificaciones)
            console.log("planeta invalido")
        }
        cargarPlanetasGuardados(divColeccion)
    })

    document.getElementById("apiContainer").addEventListener("click", (e) => {
        if (e.target.tagName !== "BUTTON") return

        if (e.target.id === "fetchPlanetButton") {
            const eventoFetchRandom = async () => {
                resultadoApi.innerHTML = "<p>Buscando planeta...</p>"
                const planeta = await traerPlanetaRandom()
                console.log(planeta)
                mostrarPlanetaImportado(planeta, resultadoApi)
                return planeta
            }
            eventoFetchRandom()
        }

        if (e.target.id === "addApiPlanetButton") {
            const planeta = JSON.parse(e.target.dataset.planetaData)
            console.log(planeta)
            guardarPlaneta(planeta)

            resultadoApi.innerHTML = "<p>Haz clic en el botón para buscar un planeta de la API.</p>"
            cargarPlanetasGuardados(divColeccion)
        }
    })

    document.getElementById("planetCollectionContainer").addEventListener("click", (e) => {
        if (e.target.tagName !== "BUTTON") return

        const id = e.target.dataset.planetId

        mostrarModal(id, notificaciones)
    })

    notificaciones.addEventListener("click", (e) => {
        if (e.target.tagName !== "BUTTON") return

        let id = e.target.dataset.planetId

        if (e.target.innerText === "Sí, eliminar") {
            id = id.includes("P-") ? id : Number.parseInt(id)
            console.log(id)
            borrarPlaneta(id)
            notificaciones.className = ""
            mostrarMensajes({ borrado: true }, notificaciones)
            cargarPlanetasGuardados(divColeccion)
        }
    })
}
