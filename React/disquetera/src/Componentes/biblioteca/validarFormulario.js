"use strict"
import {nombreValidar, grupoMusicalValidar, yearPublicacionValidar, generoValidar, localizacionValidar} from "./validaciones.js"

//Aquí están todas las validaciones que se requieren en la práctica, considero mejor separarlas de las básicas ya que por tema organizativo
//lo considero mejor y más sencillo.
const validarFormulario = (disco) => {

    let errores = {};

    if (!nombreValidar(disco.nombreDisco)){
        errores.nombreDisco = "El nombre del disco debe tener al menos 5 caracteres."
    }

    if (!grupoMusicalValidar(disco.nombreGrupo)){
        errores.nombreGrupo ="El grupo musical debe tener al menos 5 caracteres."
    }
       

    if (!yearPublicacionValidar(disco.yearPublication)){
        errores.yearPublication = "El año debe de contener 4 dígitos."
    } 
    
    if (!generoValidar(disco.genero)){
        errores.genero = "Debes seleccionar un género."
    }

    if (!localizacionValidar(disco.localizacionCodigo)){
        errores.localizacionCodigo = "La localización debe tener el formato ES-001AA."
    }

    return errores;
}

export default validarFormulario;