"use strict";

const obtenerDatos = (url) => {
    return fetch (url)
        .then ((respuesta) => {
            return respuesta.json()
        })
        .then ((datos) => {
            return datos.results
        })
        .catch((error) => {
            return(`Hay una perturbación en la fuerza: ${error}`)
        })
}

export default obtenerDatos;