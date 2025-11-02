"use strict";

//Volví a hacer el código en ambos ejercicios para pillar buenas practicas y entender mejor el funcionamiento del event (me duele la cabeza).

//Ejercicio 1
 document.addEventListener("DOMContentLoaded", () => {
//Me hice un lío con el ejercicio espero que sea esto lo que pide.
//Asi que al cambiar el html ya no debería de funcionar este código.
/*
    const divs = document.querySelectorAll("div")
        divs.forEach((div, index) => {
            const encabezado = div.querySelector("p")
            const siguienteDiv = divs[index]
            const section = siguienteDiv.querySelectorAll("div section")

            encabezado.addEventListener("click", () => {
                section.style.display = section.style.display === "none" ? "block" : "none"
            })

            //Cosa curiosa que encontré y me gusto el efecto que tenía lo guardo para futuros trabajos.
            encabezado.addEventListener("mouseover", () => {
                section.style.display = "block"
            })

            encabezado.addEventListener("mouseleave", () => {
                section.style.display = "none" 
            })  
    })*/  

    const div = document.querySelector("div")
    div.addEventListener("click", (e) => {
        const seccion = e.target.nextElementSibling
        if (e.target.tagName === "P") {
            seccion.style.display = seccion.style.display === "none" ? "block" : "none"
        }
    })



    //Ejercicio 2
    /*
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
    */

    const boton = document.querySelectorAll(".wind button")
    const contenidos = document.querySelectorAll(".contenidos section")
    addEventListener("click", (e) => {

        if (e.target.tagName === "BUTTON") {
            const index = Array.from(boton).indexOf(e.target)
            boton.forEach( b => b.classList.remove("activa"))
            contenidos.forEach(c => c.classList.remove("visible"))

            boton[index].classList.add("activa")
            contenidos[index].classList.add("visible")
        }
    })
})