"use strict";


export function calculate(number1, number2, operation) {

    if (isNaN(number1) || isNaN(number2)) {
        return "Error: Uno de los parámetros no es un número";
    }

    switch (operation) {
        case "+":
            return number1 + number2;
        case "-":
            return number1 - number2;
        case "*":
            return number1 * number2;
        case "/":
            return number2 === 0 ? "Error: No se puede dividir entre 0" : number1 / number2;
        default:
            return "Error: La operación no es válida";
    }
}