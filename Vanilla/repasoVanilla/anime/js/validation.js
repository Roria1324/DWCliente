"use strict"

const validarFormulario = (resultados) => {
    const valores = Object.values(resultados)
    const result = valores.every((valor) => valor === true)
    console.log(result)
    return result
}

const validarTitle = (title) => {
    return title.trim().length >= 3 && !nullOUndefined(title)
}

const validarYear = (year) => {
    const exp = new RegExp("[0-9]{4}")
    return (year.length === 4 && exp.test(year)) || year === "Indefinido"
}

const validarGeneros = (genres) => {
    const valido = true
    let generos = []
    try {
        generos = genres.split(", ")
    } catch (error) {
        valido = false
    }
    return (valido && generos.length > 0) || genres === "Indefinido"
}

const validarMalId = (mal_id) => {
    console.log(mal_id)
    return !Number.isNaN(Number.parseInt(mal_id)) && !nullOUndefined(title)
}

const validaciones = {
    title: (title) => validarTitle(title),
    year: (year) => validarYear(year),
    genres: (genres) => validarGeneros(genres),
    mal_id: (mal_id) => validarMalId(mal_id),
}

const resultadoValidaciones = (datos) => {
    let resultados = {}

    for (const clave in validaciones) {
        resultados = { ...resultados, [clave]: validaciones[clave](datos[clave]) }
    }
    console.log(resultados)
    return resultados
}

const nullOUndefined = (valor) => {
    return typeof valor === null || typeof valor === undefined || valor === ""
}

export { validarFormulario, resultadoValidaciones }
