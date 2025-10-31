"use strict";

// Se importa la función desde la biblioteca.
import { calcularImc } from "./bibliotecas/ejercicio1.js";

// Se calculan los valores de IMC.
let imcMarcos = calcularImc(1.9, 90);
let imcJuan = calcularImc(1.8, 75);

let imcMarcosMayorQueJuan = imcMarcos > imcJuan;

// Se muestran los resultados por consola.
console.log(`IMC de Marcos: ${imcMarcos}`);
console.log(`IMC de Juan: ${imcJuan}`);
console.log(
  `¿Tiene Marcos un IMC mayor que el de Juan?: ${imcMarcosMayorQueJuan}`
);

/* 
Ejemplo de ejecución:

IMC de Marcos: 24.93
IMC de Marcos: 23.15
¿Tiene Marcos un IMC mayor que el de Juan?: true

*/
