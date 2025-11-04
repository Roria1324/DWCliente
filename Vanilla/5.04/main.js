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
}