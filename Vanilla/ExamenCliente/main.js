"use strict"

import cargarWeb from "./biblioteca/cargarWeb.js"
import getData from "./biblioteca/getData.js";
import pintarDatos from "./biblioteca/pintarDatos.js";
import validarFormulario from "./biblioteca/validators.js";

window.onload = () => {
    cargarWeb()


    let animes = JSON.parse(localStorage.getItem("animes")) || [];

    if (typeof Storage !== undefined) {
        document.getElementById("guardar").addEventListener("click", () => {

            if (!validarFormulario()){
                return;
            }

            const newAnime = {
                id : crypto.randomUUID(),
                title : document.getElementById("nombre").value.trim(),
                image : document.getElementById("url").value.trim(),
                episodes : document.getElementById("episodes").value
            };

            animes = [...animes, newAnime];
            localStorage.setItem("animes", JSON.stringify(animes))
            document.getElementById("formulario").reset()
        })

        document.getElementById("mostrar").addEventListener("click", async () => {
            const animeApi = await getData();
            const animeLC = JSON.parse(localStorage.getItem("animes")) || [];
            document.getElementById("ani").innerHTML = pintarDatos([...animeApi, ...animeLC]);
        })

    }
}