"use strict"

import { plantillaModal } from "./plantillas.js"

const mensajes = {
    id: "El id personalizado tiene que tener formato 'P-1', 'P-2'...",
    name: "El nombre tiene que tener al menos 3 carácteres",
    orbital_period: "El periodo orbital no puede ser menor a 0",
    diameter: "El diametro no puede ser menor a 0",
    population: "La población no puede ser menor a 0",
    noExiste: "El planeta con el id que indicas ya existe",
    borrado: "Borrado con exito",
}

const mostrarMensajes = (resultados, contenedor) => {
    const mensajes = mensajesAMostar(resultados)

    let html = ""

    const clase = Object.values(resultados).every((res) => res === true) ? "success" : "error"

    Object.values(mensajes).map((msj) => {
        html = html.concat(`<p class="notificationMessage ${clase}">${msj}</p>`)
    })

    contenedor.innerHTML = html

    setTimeout(() => {
        contenedor.innerHTML = ""
    }, 7000)
}

const mensajesAMostar = (resultados) => {
    let avisos = {}

    if (Object.values(resultados).every((res) => res === true)) {
        avisos = { ok: "Planeta guardado con éxito" }
    } else {
        for (const clave in resultados) {
            if (resultados[clave] === false) {
                avisos = { [clave]: mensajes[clave], ...avisos }
            }
        }
    }
    return avisos
}

const mostrarModal = (id, contenedor) => {
    contenedor.className = "notification-container"

    let html = plantillaModal(id)

    contenedor.innerHTML = html
}

export { mostrarMensajes, mostrarModal }
