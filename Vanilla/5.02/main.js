"use strict";

import acordeon from "./biblioteca/ejericicio1.js";
import eyelashes from "./biblioteca/ejercicio2.js"

//Ejercicio 1
 document.addEventListener("DOMContentLoaded", () => {

  //Me hice un lío con el ejercicio espero que sea esto lo que pide.
  const divs = document.querySelectorAll("div")

    divs.forEach((div, index) => {
            const encabezado = div.querySelector("p")
            const siguienteDiv = divs[index]
            const section = siguienteDiv.querySelector("div .seccion")

            encabezado.addEventListener("click", () => {
                section.style.display = section.style.display === "none" ? "block" : "none"  
            })

            //Cosa curiosa que encontré y me gusto el efecto que tenía lo guardo para futuros trabajos.
            /*
            encabezado.addEventListener("mouseover", () => {
                section.style.display = "block"
            })

            encabezado.addEventListener("mouseleave", () => {
                section.style.display = "none" 
            })
                */
        
    })
})
//Ejercicio 2
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