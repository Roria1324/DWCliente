"use strict";

function validarNumero(numero){
    return isNaN(numero) ?  false:true;
}

function numeroEnRango(numero){
    return numero >= 1 && numero <= 12;
}

export function numeroMes(numero){

    if(!validarNumero(numero)){
        return "No es un número valido"
    }

    if(!numeroEnRango(numero)){
        return "El número proporcionado no está en el rango correcto (1 - 12)";
    }

    switch (numero) {
    case 1:
        return "Enero";
    case 2:
        return "Febrero";
    case 3:
        return "Marzo";
    case 4:
        return "Abril";
    case 5:
        return "Mayo";
    case 6: 
        return "Junio";
    case 7:
        return "Julio";
    case 8:
        return "Agosto";
    case 9:
        return "Septiembre";
    case 10:
        return "Octubre";
    case 11:
        return "Noviembre";
    case 12:
        return "Diciembre";
    default:
        return "Número inválido";
    }
}