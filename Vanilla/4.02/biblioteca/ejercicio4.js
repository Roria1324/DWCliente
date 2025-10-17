"use strict";
//Me ha gustado el ejercicio y me he pasado poniendo imágenes.
var imagen = ["./Imagenes/espin.jpeg",
    "./Imagenes/oso.jpeg",
    "./Imagenes/planta.jpeg",
    "./Imagenes/rata.jpeg",
    "./Imagenes/chino.jpg",
    "./Imagenes/mono.jpg",
    "./Imagenes/walter.jpg",
    "./Imagenes/willian.jpg"];

//Función la cual se crean los elementos <div> y <img>, los cuales harán de estructura para el carrusel.
//Hago uso del setAttribute ya que sin el las imágenes no pasan una a una y se queda la primera estática.
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