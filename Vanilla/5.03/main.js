"use strict";

import crearTabla from "./biblioteca/tabla.js";


window.onload = () => {
    crearTabla()
        const tabla = document.querySelector("table")
        let color = "white"
        let pintar = false;

    tabla.addEventListener("mousedown",() => pintar = true)
    tabla.addEventListener("mouseup",() => pintar = false)

    document.getElementById("borrar").addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON"){
            document.querySelectorAll("td").forEach( c => c.style.backgroundColor = "white")
        }
    })

    document.getElementById("colors").addEventListener("click", (e) => {
        if (e.target.tagName === "DIV") {
            color = e.target.getAttribute("id")
        }
    })

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