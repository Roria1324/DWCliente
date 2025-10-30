"use strict"

const acordeon = () => {
     const divs = document.querySelectorAll("body div")

    divs.forEach((div, index) => {
        if (index % 2 === 0){

            const encabezado = div.querySelector("p")
            const siguienteDiv = divs[index + 1]
            const section = siguienteDiv.querySelector("section")

            encabezado.addEventListener("click", () => {
                
                section.style.display = section.style.display === "none" ? "block" : "none"
            })
        }
    })
}

export default acordeon;