"user strict"

import { validateNumber } from "../../BibliotecaCodigoReutilizable/codigoReutilizable.js";

function isEven(number){
    if (number % 2 === 0){
        return " es par ";
    } else {
        return " es impar ";
    }
}

function isPositiveOrNegative(number){
    if (number > 0){
        return " es positivo "
    } else {
        return " es negativo "
    }
}

function isPrime(number){
    if (number <=1) return " no es primo";
    if (number === 2) return " es primo ";
    if (number % 2 === 0) return " no es primo";

    for (let i = 3; i <= Math.sqrt(number); i+=2){
        if (number % i === 0) return " no es primo";
    }
    return " es primo ";
}

export function numericalAnalysis(number){
    const result = validateNumber(number);
    if (typeof result === "string"){
        return result
    }
    
    return "El numero "+ number + isEven(number) + isPositiveOrNegative(number) + isPrime(number)
}