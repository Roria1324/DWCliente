"use strict";

const numeroAleatorio = () => {
    return Math.floor(Math.random() * 5 );
}

const colorAleatorio = () => {
    const r = Math.floor(Math.random() * 256 );
    const g = Math.floor(Math.random() * 256 );
    const b = Math.floor(Math.random() * 256 );
    return `rgb(${r}, ${g}, ${b})`;
}

const seleccionarParrafo = () => {
    const parrafo = document.body.getElementsByTagName("p");
    return  parrafo[numeroAleatorio()];
}

const cambiarColor = (parrafoAleatorio) => {
    parrafoAleatorio.style.backgroundColor = colorAleatorio();
}

export {cambiarColor, seleccionarParrafo};