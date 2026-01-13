"use strict"

const traerDatos = (url) => {
    return fetch(url)
        .then((respuesta) => {
            return respuesta.json()
        })
        .then((datos) => {
            return datos.results || datos
        })
        .catch((error) => {
            return error.message
        })
}

const obtenerDatos = async (url) => {
    try {
        const respuesta = await fetch(url)

        if (!respuesta.ok) {
            throw new Error(`Fallo al obtener datos: ${respuesta.status} - ${respuesta.statusText}`)
        }

        const datos = await respuesta.json()
        return datos.results || datos
    } catch (error) {
        throw error
    }
}
export { traerDatos, obtenerDatos }
