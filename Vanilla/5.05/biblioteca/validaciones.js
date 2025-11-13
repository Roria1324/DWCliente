"use strict";

const nombreValidar = (nombre) => {
    if (nombre.length < 5) return false;
    if (nombre === "") return false;
}

const grupoMusicalValidar = (nombre) => {
    if(nombre.length < 5) return false;
    if(nombre === "") return false;
}

const yearPublicacionValidar = (year) => {
    if(year.length < 4 || year.length > 4) return false;
    if(year === "") return false;
}

const generoValidar = (genero) => {
    const patron = /'[ES-][0-9]'/ 
}

const localizacionValidar = (codigo) => {

}
