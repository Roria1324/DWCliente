"use strict";

const nombreValidar = (nombre) => {
    if (nombre.length < 5) {
        return false;
    } else {
        return true;
    }
}

const grupoMusicalValidar = (nombre) => {
    if(nombre.length < 5) {
        return false;
    } else {
        return true;
    }
}

const yearPublicacionValidar = (year) => {
    if(year.length < 4 || year.length > 4) return false;
    if(isNaN(year)){
        return false
    } else {
        return true
    }
}

const generoValidar = (genero) => {
    if (genero === "" || genero === null) {
        return false;
    } else {
        return true;
    }
}

const localizacionValidar = (codigo) => {
    const patron = /^ES-[0-9]{3}[A-Z]{2}$/
    if (!patron.test(codigo)) return false;
}

export {nombreValidar, grupoMusicalValidar, yearPublicacionValidar, generoValidar, localizacionValidar};