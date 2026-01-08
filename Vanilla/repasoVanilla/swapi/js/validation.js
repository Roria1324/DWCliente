"use strict"

import { planetaNoExistente } from "./localStorage.js"

const validarFormulario = (resultados) => {
    return Object.values(resultados).every((valor) => valor === true)
}

const validarId = (id) => {
    const exp = new RegExp("^P-[0-9]+")
    return exp.test(id) && !nullOUndefined(id)
}

const validarNombre = (nombre) => {
    return nombre.trim().length >= 3 && !nullOUndefined(nombre)
}

const validarNumero = (numero) => {
    if (numero === "") return true
    return !Number.isNaN(Number.parseInt(numero.trim())) && Number.parseInt(numero.trim()) > 1
}

const nullOUndefined = (valor) => {
    return valor === null || valor === undefined
}
const validaciones = {
    id: (id) => validarId(id),
    name: (nombre) => validarNombre(nombre),
    orbital_period: (orbita) => validarNumero(orbita),
    diameter: (diametro) => validarNumero(diametro),
    population: (habitantes) => validarNumero(habitantes),
}

const resultadosValidaciones = (datosForm) => {
    let resultados = {}
    console.log(datosForm)

    const existe = planetaNoExistente(datosForm.id)

    for (const clave in datosForm) {
        resultados = { [clave]: validaciones[clave](datosForm[clave]), ...resultados }
    }
    resultados = { noExiste: existe, ...resultados }
    return resultados
}

export { resultadosValidaciones, validarFormulario }
