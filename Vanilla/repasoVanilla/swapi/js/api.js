"use strict"

import { numRandom } from "./lib.js"

const traerDatos = async (url) => {
    try {
        const respuesta = await fetch(url)
        if (!respuesta.ok) {
            throw new Error("Fallo al conectar con la api")
        }
        const datos = respuesta.json()
        return datos
    } catch (error) {
        throw error
    }
}

const traerPlanetaRandom = async () => {
    const num = numRandom(60)
    const url = `https://swapi.info/api/planets/${num}/`

    try {
        const planeta = await traerDatos(url)
        return planeta
    } catch (error) {
        console.log("Error al traer el planeta random")
    }
}

export { traerDatos, traerPlanetaRandom }
