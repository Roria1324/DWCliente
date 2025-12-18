"use strict"

const verificarNombre = (nombre) => {
    if (!nombre || nombre.length < 3){
        return false;
    } else {
        return true;
    }
}

const verificarEpisodios = (episodios) => {
    if (!episodios || episodios < 1){
        return false
    } else {
        return true
    }
}

const validarFormulario = () => {
    const nombre = document.getElementById("nombre").value;
    const episodios = document.getElementById("episodes").value;

    const mensajError = document.getElementById("error")
    mensajError.innerHTML = "";
    let errores = [];

    if(!verificarNombre(nombre)){
        errores = [...errores, "No puede estar el nombre vacio"]
        document.getElementById("nombre").classList.add("inputError")
    } else {
        document.getElementById("nombre").classList.remove("inputError")
    }

    if(!verificarEpisodios(episodios)){
        errores = [...errores, "Tiene que mínimo 1 episodio registrado"]
        document.getElementById("episodes").classList.add("inputError")
    } else {
        document.getElementById("episodes").classList.remove("inputError")
    }

    if (errores.length > 0) {
        mensajError.innerHTML = errores.join("<br>");
        mensajError.style.display = "block"
        return false;
    }
    return true;
}

export default validarFormulario;