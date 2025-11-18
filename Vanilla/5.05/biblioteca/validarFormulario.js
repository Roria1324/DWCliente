"use strict"
import {nombreValidar, grupoMusicalValidar, yearPublicacionValidar, generoValidar, localizacionValidar} from "./validaciones.js"

const validarFormulario = () => {
    const nombre = document.getElementById("nombreDisco").value.trim();
    const grupo = document.getElementById("nombreGrupo").value.trim();
    const year = document.getElementById("yearPublication").value.trim();
    const genero = document.getElementById("genero").value;
    const localizacion = document.getElementById("localizacionCodigo").value.trim();

    const mensajeError = document.getElementById("mensajeError")
    mensajeError.innerHTML = "";

    let errores = [];

    if (!nombreValidar(nombre)){
        errores = [...errores, "El nombre del disco debe tener al menos 5 caracteres."];
        document.getElementById("nombreDisco").classList.add("inputError");
    } else {
        document.getElementById("nombreDisco").classList.remove("inputError");
    }

    if (!grupoMusicalValidar(grupo)){
        errores = [...errores, "El grupo musical debe tener al menos 5 caracteres."];
        document.getElementById("nombreGrupo").classList.add("inputError");
    } else {
        document.getElementById("nombreGrupo").classList.remove("inputError");
    }

    if (!yearPublicacionValidar(year)){
        errores = [...errores, "El año debe de contener 4 dígitos."];
        document.getElementById("yearPublication").classList.add("inputError");
    } else {
        document.getElementById("yearPublication").classList.remove("inputError");
    }
    
    if (!generoValidar(genero)){
        errores = [...errores, "Debes seleccionar un género."];
        document.getElementById("genero").classList.add("inputError");
    } else {
        document.getElementById("genero").classList.remove("inputError");
    }

    if (!localizacionValidar(localizacion)){
        errores = [...errores, "La localización debe tener el formato ES-001AA."];
        document.getElementById("localizacionCodigo").classList.add("inputError");
    } else {
        document.getElementById("localizacionCodigo").classList.remove("inputError");
    }

    if (errores.length > 0){
        mensajeError.innerHTML = errores.join("<br>");
        mensajeError.style.display = "block";
        return false;
    }
    return true;
}

export default validarFormulario;