"use strict";

import {crearArrayFotos, aleatorizarFoto} from "./biblioteca/aleatorizarFoto.js";
import validarOrden from "./biblioteca/validarOrden.js";


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
<<<<<<< HEAD

 
=======
//Evento para poder arrastrar las imágenes.
>>>>>>> 09301dafab0f01cc59026855b5d788d412a12e64
    document.getElementById("arrastrables").addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("pieza", e.target.id)
        e.dataTransfer.setData("nombre", e.target.localName)
    })
//Evento para prevenir el drop.
    document.getElementById("arrastrables").addEventListener("dragover", (e) => {
        e.preventDefault();
    })
//Evento para poder soltar el objeto arrastrado sobre otra celda.
    document.getElementById("arrastrables").addEventListener("drop", (e) => {
        if (e.target.classList.contains("soltable")){
            e.target.appendChild(
                document.getElementById(e.dataTransfer.getData("pieza")));
                validarOrden(imagenes);
        }
    })

    document.getElementById("arrastrables").addEventListener("drop", (e) => {
        if (e.target.classList.contains("zonaImagenes")){
            e.target.appendChild(
                document.getElementById(e.dataTransfer.getData("pieza")));
                validarOrden(imagenes);
        }
    })
//Evento que cada vez que se pulsa el botón quita las imágenes de soltable y reinicia el juego.
    document.getElementById("reiniciar").addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON"){
            document.querySelectorAll(".soltable").forEach(celda => {
                celda.innerHTML = ""
            })
            document.getElementById("imagenes").innerHTML = ""
            document.getElementById("mensaje-ganador").innerHTML = "";
            crearArrayFotos(aleatorizarFoto(imagenes));
        }
    })

}

export default imagenes;