"use strict";

import crearTabla from "./biblioteca/tabla.js";


window.onload = () => {
    crearTabla()
        const colores = document.querySelectorAll(".colores div")
        const celdas = document.querySelectorAll("tr td")
        const borrar = document.querySelector(".colores borrar")
        let color = "white"
        let pintar = false;

    addEventListener("click", (e) => {
        if(e.target.tagName === "BUTTON"){
            celdas.forEach( c => c.style.backgroundColor = "white")
        }
    })

    document.addEventListener("mousedown",() => pintar = true)
    document.addEventListener("mouseup",() => pintar = false)

    addEventListener("click", (e) => {
        const index = Array.from(colores).indexOf(e.target)
        if (e.target.tagName === "DIV") {
            color = colores[index].getAttribute("id")
        }
    })

    addEventListener("mousedown", (e) => {
        const index = Array.from(celdas).indexOf(e.target)
        if (pintar){
            if (e.target.tagName === "TD"){
                celdas[index].style.backgroundColor = color;
            }
        }
    })

    addEventListener("mouseover", (e) => {
        const index = Array.from(celdas).indexOf(e.target)
        if (pintar){
            if (e.target.tagName === "TD"){
                celdas[index].style.backgroundColor = color;
            }
        }
    })
}; //Fin onload