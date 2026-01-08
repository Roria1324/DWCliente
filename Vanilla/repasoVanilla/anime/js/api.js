"use strict"

const traerDatos = async (url) => {
    try {
        const respuesta = await fetch(url)
        if (!respuesta.ok) throw new Error("Promesa okn't")
        const datos = await respuesta.json()
        return datos.data || datos
    } catch (error) {
        throw error
    }
}

const traerAnimeNombre = async (nombre) => {
    const url = `https://api.jikan.moe/v4/anime?q=${nombre}`

    try {
        const respuesta = await traerDatos(url)
        return respuesta
    } catch (error) {
        console.log(error.message)
    }
}

const traerAnimeId = async (id) => {
    const url = `https://api.jikan.moe/v4/${id}`

    try {
        const respuesta = await traerDatos(url)
        return respuesta
    } catch (error) {
        console.log(error.message)
    }
}
export { traerDatos, traerAnimeNombre, traerAnimeId }
