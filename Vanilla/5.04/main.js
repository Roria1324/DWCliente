"use strict";

import {crearArrayFotos, aleatorizarFoto} from "./biblioteca/aleatorizarFoto.js";


window.onload = () => {

    const imagenes = [
        './puzzleFoto/1.jpg',
        './puzzleFoto/2.jpg',
        './puzzleFoto/3.jpg',
        './puzzleFoto/4.jpg',
        './puzzleFoto/5.jpg',
        './puzzleFoto/6.jpg',
        './puzzleFoto/7.jpg',
        './puzzleFoto/8.jpg',
        './puzzleFoto/9.jpg'
    ]

    crearArrayFotos(aleatorizarFoto(imagenes));

 
    document.getElementById("arrastrables").addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("pieza", e.target.id)
        e.dataTransfer.setData("nombre", e.target.localName)
    })
    
    document.getElementById("arrastrables").addEventListener("dragover", (e) => {
        e.preventDefault();
    })

    document.getElementById("arrastrables").addEventListener("drop", (e) => {
        if (e.target.classList.contains("soltable")){
            e.target.appendChild(
                document.getElementById(e.dataTransfer.getData("pieza")));
        }
    })

    document.getElementById("arrastrables").addEventListener("drop", (e) => {
        if (e.target.classList.contains("zonaImagenes")){
            e.target.appendChild(
                document.getElementById(e.dataTransfer.getData("pieza")));
        }
    })

    document.getElementById("reiniciar").addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON"){
            document.querySelectorAll(".soltable").forEach(celda => {
                celda.innerHTML = ""
            })
            document.getElementById("imagenes").innerHTML = ""
            crearArrayFotos(aleatorizarFoto(imagenes));
        }
    })

}