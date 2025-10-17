"use strict";

var imagen = 
    ["",
    "",
    "",
    "",]

const carruselImagenes = () => {
    const contenedor = document.createElement("div");
    const carrusel = document.createElement("img");
    contenedor.appendChild(carrusel);
    document.body.appendChild(contenedor);

    let i = 0;
    imagen.src = imagen[i];

    setInterval(() => {
    i = i++ % imagen.length;
    imagen.src = imagen[i];
    }, 2000)
}

export default carruselImagenes;