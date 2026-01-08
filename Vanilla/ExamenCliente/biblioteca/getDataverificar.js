"use strict";

const getDataaa = async () => {
    const url = "https://api.jikan.moe/v4/anime";
    try {
        const respuesta = await fetch(url)
        if (!respuesta.ok) throw new Error("No funciona");
        const datos = await respuesta.json()
        return datos.data || datos
    } catch (error) {
        throw error
    }
}
