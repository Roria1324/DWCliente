"use strict";

/**
 * DESCARGO DE RESPONSABILIDAD
 * Todas las funciones aquí declaradas son un claro error de diseño (no debe hacerse en principal.js).
 * Deben estar en un archivo de biblioteca aparte, se es consciente de este error.
 * En lo sucesivo, y exclusivamente con fines didácticos, serán declaradas de este modo.
 * Tanto en las prácticas como en un proyecto real, no debe hacerse así (si no queremos ser devorados por la entropía).
 */

/************************************************************************************************
 * VALORES PRIMITIVOS CONTRA OBJETOS (string, number, boolean, null y undefined).
 * */

let cadena = `Feo`; // Es posible utilizar comillas dobles, simples y agudas (recomendadas).
let entero = 5;
let real = 3.14; // ¡¡¡Cuidado con la notación de punto en IU!!! No usar el sistema imperial (sus naves son triángulos).

let cadenaObjeto = new String("Feo objeto");
let enteroObjeto = new Number(6);

console.log(enteroObjeto);

/* console.log(cadena); 
console.log(cadenaObjeto);
console.log(entero);
console.log(enteroObjeto); */

// Los primitivos no tienen métodos, ¿entonces?...
/* console.log(cadena.toUpperCase());
console.log(entero.toFixed(2));
console.log(real.toString()); */

/**
 * Autoboxing o Object Wrapper.
 * El método toUpperCase esta definido en el prototipo String, que esta relacionado con el valor primitivo de cadena.
 * En el momento que se llama al método del prototipo ejecuta la función y destruye este objeto utilizado.
 */

/************************************************************************************************
 * ARRAYS
 * */

/** Declaración.  */

let cosas = new Array();
let tresTipos = new Array(11, "Feo", true);
let tresTiposDos = [11, "hola", true];
let masCosas = [];

/* console.log(tresTiposDos);
console.log(tresTiposDos[3]); */

/** 
            ¡¡CUIDADO!!
Métodos que modifican el array original y otros no.
Algunos devuelven un elemento u otro valor.
Incluso los hay que no hacen nada.

forEach(función) 	  → ejecuta la función para cada elemento.
map(función) 		    → ejecuta la función para cada elemento (devuelve).
every(función) 		  → si la función se cumple siempre.
some(función) 		  → si la función se cumple para alguno.
filter(función) 		→ devuelve un nuevo array con elementos que cumplen la función.

Los callbacks reciben tres parámetros opcionales en este orden:
  → el valor del elemento del array,
  → el índice del elemento y
  → el propio array.

Caso especial -> reduce(función(acumulador, valor, índice, array))

*/

var bichos = ["Shakra", "Sherma", "Mooshka", "Huntress", "Hornet"];

function esCadena(valor, indice, array) {
  return typeof valor === "string";
}
//console.log(bichos.every(esCadena)); // true

let mezcladillo = [1, "dos", 3, "cuatro", 5, "seis"];

//console.log(mezcladillo.filter(esCadena)); // ["dos", "cuatro", "seis"]

let numeros = [1, 3, 5, 7, 9];
let suma = numeros.reduce((acumulador, valor, indice, array) => {
  return acumulador + valor;
});

//console.log(suma);

const feos = ["Rodrigo", "Juan", "Artura", "Javier"];

/*** Recorrer un objeto (no se modifica pero hay que utilizar map). */

/* const feosMap = feos.map((feo) => {
  //console.log(feo);
  return feo;
});

const feosForeach = feos.forEach((feo) => {
  //console.log(feo);
  return feo;
});

console.log(feosMap);
console.log(feosForeach); */

// Continuará...
