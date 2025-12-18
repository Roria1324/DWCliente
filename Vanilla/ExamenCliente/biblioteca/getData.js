"use strict"

const getData = async () => {

    const url = "https://api.jikan.moe/v4/anime"
    try {
        const respuesta = await fetch(url);
        if (!respuesta.ok) return ("No hay nada");
        const datos = await respuesta.json()
        return datos.data || datos
    } catch (error) {
        throw error
    }
}

export default getData;