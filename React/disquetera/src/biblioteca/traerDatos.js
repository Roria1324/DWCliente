"use strict"

const obtenerDatos = async (url) => {
    try {
        const respuesta = await fetch(url);

        if(!respuesta.ok) throw new Error(`Los datos: ${respuesta.status}`);
        const datos = await respuesta.json();
        return datos.results || datos
    } catch (error) {
        throw error
    }
}

export default obtenerDatos;