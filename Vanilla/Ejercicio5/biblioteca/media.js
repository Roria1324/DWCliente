"use strict";
// Función principal que calcula la media de una serie de números
export function average() {
    if (arguments.length === 0) {
        return "No se pueden promediar 0 números";
    }

    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] !== "number" || arguments[i] < 0) {
            return "El argumento "+ arguments[i] + " no es un número o es un número negativo";
        }
        sum += arguments[i];
    }
    return "Total: " + sum / arguments.length;
}