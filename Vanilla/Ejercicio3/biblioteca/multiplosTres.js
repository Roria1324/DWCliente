"use strict"

// Importamos la función de validación de números
function isPositiveOrNegative(number){
    if (number > 0){
        return number;
    } else {
        return "El número introducido es negativo";
    }
}
// Función principal que devuelve los múltiplos de 3 hasta el número proporcionado
export function multipleOf(number){

    const result = isPositiveOrNegative(number);

    if (typeof result === "string"){
        return result;
    }
    const arrayNumbers = []
    if (number % 3 === 0){
        for (let i = 1; i <= number; i++) {
            if (i % 3 === 0){
            arrayNumbers.push(i);
            }
        }
        return number + " para llegar hasta ese número los múltiplos de 3 son: " + arrayNumbers;

    } else {
        return number + " no es primo";
    }
}