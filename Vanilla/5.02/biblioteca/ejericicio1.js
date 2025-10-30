"use strict"

const acordeon = () => {
     const divs = document.querySelectorAll("body div")

    divs.forEach((div, index) => {
        if (index % 2 === 0){
            const encabezado = div.querySelector("p")
            const siguienteDiv = divs[index]
            const section = siguienteDiv.querySelector("section")
        }
    })
}

export default acordeon;