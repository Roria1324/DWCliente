"use strict"

import { plantillaBorrarAnime } from "./render.js"

const mensajes = {
    title: "El título es obligatorio y tiene que tener mínimo 3 caracteres",
    year: "El año tienen que ser 4 dígitos",
    genres: "Los géneros tienen que ir separados por comas",
    mal_id: "El id es obligatorio",
}

const resaltarErrores = (mensajesError) => {
    for (const msj in mensajesError) {
        document.getElementById(msj).classList.add("input-error")
    }
}

const mostrarMensajes = (resultados, contenedor) => {
    const mensajes = mensajesAMostrar(resultados)
    console.log(mensajes)

    let html = ""

    const clase = Object.keys(mensajes).find((key) => key === "mensaje") ? "success" : "error"

    Object.values(mensajes).map((mensaje) => {
        html = html.concat(`<p>${mensaje}</p>`)
    })

    contenedor.classList.add(clase)
    contenedor.innerHTML = html

    if (clase === "error") {
        console.log("hola")
        resaltarErrores(mensajes)
    }

    setTimeout(() => {
        esconderMensajes(contenedor)
    }, 7000)
}

const mensajesAMostrar = (resultados) => {
    if (Object.values(resultados).every((result) => result === true)) {
        return { mensaje: "Anime guardado con éxito" }
    }
    let msj = {}
    for (let clave in resultados) {
        if (resultados[clave] === false) {
            msj = { ...msj, [clave]: mensajes[clave] }
        }
    }

    return msj
}

const modalBorrarAnime = (id, contenedor) => {
    const plantilla = plantillaBorrarAnime(id)
    contenedor.classList.add("modal")
    contenedor.innerHTML = plantilla
}

const esconderMensajes = (contenedor) => {
    contenedor.classList = "message-container"
    contenedor.innerHTML = ""
}

export { mostrarMensajes, modalBorrarAnime, esconderMensajes }
