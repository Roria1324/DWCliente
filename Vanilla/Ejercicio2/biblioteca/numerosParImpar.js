"user strict"

import { validateNumber } from "../../BibliotecaCodigoReutilizable/codigoReutilizable.js";
// Función para validar si el número es par o impar
function isEven(number){
    if (number % 2 === 0){
        return " es par ";
    } else {
        return " es impar ";
    }
}
// Función para validar si el número es positivo o negativo
function isPositiveOrNegative(number){
    if (number > 0){
        return " es positivo "
    } else {
        return " es negativo "
    }
}
// Función para validar si el número es primo
function isPrime(number){
    if (number <=1) return " no es primo";
    if (number === 2) return " es primo ";
    if (number % 2 === 0) return " no es primo";

    for (let i = 3; i <= Math.sqrt(number); i+=2){
        if (number % i === 0) return " no es primo";
    }
    return " es primo ";
}
// Función principal que devuelve si el número es par o impar, positivo o negativo y si es primo o no
export function numericalAnalysis(number){
    const result = validateNumber(number);
    if (typeof result === "string"){
        return result
    }
    
    return "El numero "+ number + isEven(number) + isPositiveOrNegative(number) + isPrime(number)
}