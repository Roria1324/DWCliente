"use strict"
// Importamos la función de validación de números
import { validateNumber } from "../../BibliotecaCodigoReutilizable/codigoReutilizable.js"

// Función principal que calcula la potencia de un número elevado a otro
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
    while (loop < exponential) {
        loop++;
        result *= base        
    }
    return "El resultado de la potencia de " + base + " elevado a " + exponential + " es = " + result
}