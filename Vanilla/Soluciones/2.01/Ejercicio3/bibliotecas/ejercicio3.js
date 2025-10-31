"use strict";

function imprimirNumeros(cantidad, valor) {
  let salida = "Salida:"; // String donde se guardan los valores.
  if (cantidad >= 1) {
    // Se crea la salida sólo si el parametro cantidad es mayor o igual a 1.
    for (let i = 0; i < cantidad; i++) {
      if (i == 0) {
        salida = `${salida} ${valor}`; // En la primera iteración se añade al string el valor pasado por parámetro.
      } else {
        valor = valor * 2; // En las siguiente iteraciones se multiplica el valor por 2.
        salida = `${salida} ${valor}`; // Se añade al string salida del valor.
      }
    }
  } else salida = "No hay valores que mostrar.";
  return `${salida}`;
}

export { imprimirNumeros };
