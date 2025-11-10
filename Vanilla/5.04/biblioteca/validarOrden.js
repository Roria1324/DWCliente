"use strict"

//Intento de validar orden pero no me ha dado tiempo ha terminarlo (se me ha olvidado terminarlo el finde y pensaba que lo tenía hecho, spoiler no lo tenía).
//Pero mi idea era a través del nombre de las imágenes intentar ordenarlas ya que la id si cambia de sitio pero los nombres siempre están en orden.
//Supongo que me habría olvidado de este lío si asignaba id a los "soltable".
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