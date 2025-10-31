"use strict";

 document.addEventListener("DOMContentLoaded", () => {

  //Al principio recorría todos los divs y añadía eventos, se ha cambiado el html a un único div y hacerlo bien para mejorar practicas.
  const divs = document.querySelectorAll("div")

    divs.forEach((div, index) => {
        if (index % 2 === 0){
            const encabezado = div.querySelector("p")
            const siguienteDiv = divs[index]
            const section = siguienteDiv.querySelector("div .seccion")

            encabezado.addEventListener("mouseover", () => {
                section.style.display = "block"
            })

            encabezado.addEventListener("mouseleave", () => {
                section.style.display = "none" 
            })
        }
    })
})

 document.addEventListener("DOMContentLoaded", () => {

    const botones = document.querySelectorAll(".wind  button");
    const contenidos = document.querySelectorAll(".contenidos section");

    botones.forEach((btn, index) => {
        btn.addEventListener("click", () => {

            botones.forEach(b => b.classList.remove("activa"))
            contenidos.forEach(c => c.classList.remove("visible"));

            btn.classList.add("activa");
            contenidos[index].classList.add("visible");

        });
    });
    botones[0].classList.add("activa")
    contenidos[0].classList.add("visible");
})