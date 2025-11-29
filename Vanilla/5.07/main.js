"use strict";
import obtenerDatos from "./biblioteca/obtenerInfo.js"
import {pintarPeliculas, buscar, datosPelicula} from "./biblioteca/pintarDatos.js";

window.onload = () => {
    const url = "https://swapi.info/api/films"

    const listado = document.getElementById("peliculas-listado")
    //Funcion para ver el listado de películas, he decidido dejarlo en el main ya que es una funcion 
    const verPelis = async () => {
        const pelis = await obtenerDatos(url)
        listado.innerHTML = pintarPeliculas(pelis)
    }
    verPelis()

    listado.addEventListener("click", async (e) => {
        const pelis = await obtenerDatos(url)
        let peli = buscar(pelis, e.target.id)
        document.getElementById("conenedor-datospeli").innerHTML = datosPelicula(peli)
    }) 
}