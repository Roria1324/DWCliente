"use strict"

import { validateNumber } from "../../BibliotecaCodigoReutilizable/codigoReutilizable.js"

export function potencia(number1, number2){

    const base = validateNumber(number1)

    if (typeof base === "string"){
        return "El número 1 no es un número"
    }

    const exponential = validateNumber(number2)

    if (typeof exponential === "string"){
        return "El número 2 no es un número"
    }

    let loop = 0
    let result = 1
    while (loop < number2) {
        result = result * number1        
    }
    return "El resultado de la potencia de " + base + "elevado a " + exponential + " es = " + result
}