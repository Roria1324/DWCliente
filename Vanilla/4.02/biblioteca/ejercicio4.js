"use strict";

var imagen = ["./Imagenes/espin.jpeg",
    "./Imagenes/oso.jpeg",
    "./Imagenes/planta.jpeg",
    "./Imagenes/rata.jpeg"];

const carruselImagenes = () => {
    const contenedor = document.createElement("div");
    const carrusel = document.createElement("img");
    
    carrusel.setAttribute("id", "carrusel"); 

    contenedor.appendChild(carrusel);
    document.body.appendChild(contenedor);

    carrusel.style.height = "600px";

    carrusel.style.width = "500px";
    let i = 0;
    carrusel.src = imagen[i];

    setInterval(() => {
    i = (i + 1) % imagen.length;
    carrusel.src = imagen[i];
    
    const elemento = document.getElementById("carrusel");
    if (elemento){
        elemento.src = imagen[i]
    }
    }, 2000)
}

export default carruselImagenes;