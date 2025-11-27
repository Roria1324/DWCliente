"use strict";
import obtenerDatos from "./biblioteca/obtenerInfo.js"
import pintarPeliculas from "./biblioteca/pintarDatos.js";

window.onload = () => {
    const url = "https://swapi.py4e.com/api/films/"
    

    const datos = async () => {
        const info = await obtenerDatos(url)
        console.log(info);
    }
    datos()

    const verPelis = async () => {
        const pelis = await obtenerDatos(url)
        document.getElementById("peliculas-listado").innerHTML = pintarPeliculas(pelis)
    }

    verPelis()
    
}