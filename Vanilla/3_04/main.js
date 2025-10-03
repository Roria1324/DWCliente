"use strict";

import { names, upperName, namesReversedOrder, nameJsonArray} from "./biblioteca/Ejercicio1.js";
import { allArrays } from "./biblioteca/Ejercicio2.js";
import { añadirApellidos, correoYahoo, insertUser, mayorEdad, newEntrance, noDatos, variosFiltros } from "./biblioteca/Ejercicio3.js";

//Esta todo comentado para mayor comodidad a la hora de mostrar los resultados por consola, ya que es mucha información de golpe y cuesta diferenciar los apartados de cada ejercicio. :)
//Ejercicio 1
/*
console.log("Mostrar todos los nombres en mayúsculas: ");
console.log(upperName(names).join(", "));

console.log("Mostrar los nombres ordenados de manera descendente: ");
console.log(namesReversedOrder.join(", "));

console.log("Mostrar un JSON con los nombres: ");
console.log(JSON.stringify(nameJsonArray, null, 2));
*/
//Ejercicio 2
/*
console.log("Números aleatorios de tres arrays recogidos en uno y que sean mayores de 5:");
console.log(JSON.stringify(allArrays, null, 2));
*/

//Ejercicio 3
/*
console.log("Insertar usuarios:");
console.log(JSON.stringify(insertUser({
  nombre: "Roria",
  preferencias: { tema: "oscuro", idioma: "italiano", edad: 22 },
  contacto: {
    direccion: { calle: "Via falsa, 77", localidad: "Roma", pais: "Italia" },
    correoelectronico: "nuevocorreo@yahoo.it",
    telefono: "999999999"
  }
}), null, 2));

console.log("Mostrar quien es mayor de edad:");
console.log(JSON.stringify(mayorEdad(), null, 2));

console.log("Mostrar quien tiene yahoo:");
console.log(JSON.stringify(correoYahoo(), null, 2));

console.log("Mostrar quien tiene varias condiciones:");
console.log(JSON.stringify(variosFiltros(), null, 2));

console.log("Añadir apellidos:");
console.log(JSON.stringify(añadirApellidos(), null, 2));

console.log("Verificar si hay campo sin datos:");
console.log(JSON.stringify(noDatos(), null, 2));

console.log("Añadir nuevo campo al Json: código:");
console.log(JSON.stringify(newEntrance(), null, 2));
*/