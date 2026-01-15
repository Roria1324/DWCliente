"use strict"

// AVISO: Solo hay validaciones de los campos obligatorios o tienen algún
// tipo de expresión regular
const validarNombre = (nombre) => {
    return nombre.trim().length >= 5 && !nullOUndefined(nombre)
}

const validarArtista = (artista) => {
    return artista.trim().length >= 5 && !nullOUndefined(artista)
}

const validarAnyoPublicacion = (anyo) => {
    // Esta comprobación se debe a que el valor en caso de estar vacío
    // se modifica a "Sin año". En caso de que este vacío no se comprueba
    // y si hay algún número se verifica su longitud
    if (anyo === "Desconocido" || anyo === "") return true
    return anyo.trim().length === 4
}

const validarGenero = (genero) => {
    return genero.trim() !== "vacio" && !nullOUndefined(genero)
}

const validarLocalizador = (localizador) => {
    // Regex para verificar que el localizador empieza con "ES" en mayúsculas
    // sigue con un guión, continua con 3 números y finaliza con otras 2
    // mayúsculas
    const expLocalizador = new RegExp("^ES-\\d{3}[A-Z]{2}$")
    return expLocalizador.test(localizador)
}

const validaciones = {
    nombre: (disco) => validarNombre(disco.nombre),
    artista: (disco) => validarArtista(disco.artista),
    anyoPublicacion: (disco) => validarAnyoPublicacion(disco.anyoPublicacion),
    genero: (disco) => validarGenero(disco.genero),
    localizador: (disco) => validarLocalizador(disco.localizador),
}

// Indica si todas las comprobaciones son correctas (todas a true)
const validarFormulario = (disco) => {
    const resultados = Object.values(resultadoValidaciones(disco))
    return resultados.every((resultado) => resultado === true)
}

// Por cada campo, ejecuta su validación
const resultadoValidaciones = (disco) => {
    let resultados = {}

    for (const clave in validaciones) {
        resultados = { ...resultados, [clave]: validaciones[clave](disco) }
    }
    return resultados
}

const nullOUndefined = (valor) => {
    return valor === null || valor === undefined || valor === ""
}

export { validarFormulario, resultadoValidaciones }
