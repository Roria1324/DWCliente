"use strict"

export function validateNumber(number){
    if (isNaN(number)){
        return "El dato introducido es erróneo introduzca un número.";
    } else {
        return number;
    }
}