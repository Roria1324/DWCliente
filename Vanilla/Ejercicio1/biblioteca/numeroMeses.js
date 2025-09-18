"use strict";

import { validateNumber } from "../../BibliotecaCodigoReutilizable/codigoReutilizable.js"; 

const arrayMonth = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
];
// Función para validar si el número está en el rango de 1 a 12
function numberInRange(number){
    if (number >= 1 && number <= 12){
        return number;
    } else {
        return "El número proporcionado no está en el rango correcto (1 - 12).";
    }
}
// Función principal que devuelve el nombre del mes correspondiente al número
export function numberMonth(number){

    const validated = validateNumber(number)
    if(typeof validated === "string"){
        return validated
    }

    const inRange = numberInRange(validated)
    if(typeof inRange === "string"){
        return inRange
    }

    return arrayMonth[inRange - 1] + " es el mes número " + number;
}