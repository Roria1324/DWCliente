"use strict"

const validarOrden = (imagenes) => {
    const celdas = document.querySelectorAll(".soltable");
    let correcto = true;

    celdas.forEach((celda, i) => {
        const img = celda.querySelector("img");
        if (!img || img.src.endsWith(imagenes[i])){
            correcto = false;
        }
    });

    if (correcto){
        document.getElementById("mensaje-ganador").innerHTML = "<p>Has ganado</p>";
    } else {
        document.getElementById("mensaje-ganador").innerHTML = "";
    }
}
export default validarOrden;