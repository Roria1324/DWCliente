"use strict";

import crearTabla from "./biblioteca/tabla.js";


window.onload = () => {
    crearTabla(60)
        const tabla = document.querySelector("table");
        const colorTexto = document.getElementById("color-seleccionado");
        let color = "white";
        let pintar = false;

    
    //Evento para borrar toda la tabla.
    document.getElementById("borrar").addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON"){
            document.querySelectorAll("td").forEach( c => c.style.backgroundColor = "white");
        }
    })
    //Evento para la obtención del color.
    document.getElementById("colors").addEventListener("click", (e) => {
        if (e.target.tagName === "DIV") {
            color = e.target.getAttribute("id");
            colorTexto.innerHTML = color;
        }
    })
    //Eventos usados para poder pintar en la tabla manteniendo el click.
    tabla.addEventListener("mousedown",() => pintar = true);
    tabla.addEventListener("mouseup",() => pintar = false);

    tabla.addEventListener("mousedown", (e) => {
        if (pintar){
            if (e.target.tagName === "TD"){
                e.target.style.backgroundColor = color;
            }
        }
    })

    tabla.addEventListener("mouseover", (e) => {
        if (pintar){
            if (e.target.tagName === "TD"){
                e.target.style.backgroundColor = color;
            }
        }
    })
}; //Fin onload