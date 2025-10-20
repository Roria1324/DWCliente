"use strict";

//Función que escoge un número aleatorio el cual será el párrafo a darle estilo.
const numeroAleatorio = () => {
    return Math.floor(Math.random() * 5 );
}
//Función que escoge un numero en el rango de 1 a 256, que será para darle un color al párrafo.
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