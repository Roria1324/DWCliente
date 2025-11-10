"use strict"

//Le paso un array de imágenes para devolverlo de manera aleatoria. 
const aleatorizarFoto = (array) => {

    for (let i = array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1)); 
        [array[i], array[j]] = [array[j],array[i]]
    }
    return array;
}

//Desde el array que ha sido previamente aleatorizado le asigno a las fotos sus atributos y una id.
const crearArrayFotos = (array) => {
    for (let i = 0; i < array.length; i++) {
        let imagen = array[i]

        let img = document.createElement("img")
        img.src = imagen
        img.alt = `fotoTrozo`
        img.className = `pieza`
        img.id = i
        img.setAttribute("draggable", true)

        document.getElementById("imagenes").appendChild(img)
    }
}

export {crearArrayFotos, aleatorizarFoto};