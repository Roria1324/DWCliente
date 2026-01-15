"use strict"

const mensajes = {
    nombre: "El nombre tiene que tener un mínimo de 5 caracteres",
    artista: "El artista tiene que tener un mínimo de 5 caracteres",
    anyoPublicacion: "El año de publicación tiene que tener 4 dígitos",
    genero: "El género no puede estar vacío",
    localizador:
        "El localizador tiene que empezar por 'ES-' seguido de un número de 3 dígitos y terminar con 2 letras en mayúsculas (ES-123AA)",
}

// Dado el resultado de la validación por cada clave, añade al array de
// mensajesError los que tengan que la validación sea false
const generarMensajes = (resultadosValidar) => {
    let mensajesError = {}
    for (const clave in mensajes) {
        if (resultadosValidar[clave] === false) {
            mensajesError = { ...mensajesError, [clave]: mensajes[clave] }
        }
    }

    return mensajesError
}

export { generarMensajes }
