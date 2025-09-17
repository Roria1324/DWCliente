"use strict";

import {
  imprimirPuntos,
  calcularMedia,
  obtenerPuntos,
  obtenerGanador,
} from "./bibliotecas/ejercicio2.js";

// Definición de variables.
let puntosEqJuan = [89, 120, 103];
let puntosEqMiguel = [116, 94, 123];
let puntosEqMaria = [97, 134, 105];

// Resultados con los datos del enunciado.
console.log(`----- Cálculos con los datos del enunciado -----`);
let mediaEqJuan = calcularMedia(puntosEqJuan);
let mediaEqMiguel = calcularMedia(puntosEqMiguel);
console.log(imprimirPuntos(puntosEqJuan, "Juan"));
console.log(`La puntuación media del equipo de Juan es: %.2f.`, mediaEqJuan);
console.log(imprimirPuntos(puntosEqMiguel, "Miguel"));
console.log(
  `La puntuación media del equipo de Miguel es: %.2f.`,
  mediaEqMiguel
);
let equipoGanador = obtenerGanador(
  "Juan",
  mediaEqJuan,
  "Miguel",
  mediaEqMiguel
);
console.log(); // Para imprimir una línea en blanco.

//Resultados con los mismos datos (aleatorios) en los equipos de Juan y Miguel.
console.log(
  `----- Cálculos con los mismos puntos en ambos equipos para forzar el empate -----`
);
puntosEqJuan = obtenerPuntos(3);
puntosEqMiguel = puntosEqJuan;
console.log(imprimirPuntos(puntosEqJuan, "Juan"));
mediaEqJuan = calcularMedia(puntosEqJuan);
console.log(`La puntuación media del equipo de Juan es: %.2f.`, mediaEqJuan);
console.log(imprimirPuntos(puntosEqMiguel, "Miguel"));
mediaEqMiguel = calcularMedia(puntosEqMiguel);
console.log(
  `La puntuación media del equipo de Miguel es: %.2f.`,
  mediaEqMiguel
);
equipoGanador = obtenerGanador("Juan", mediaEqJuan, "Miguel", mediaEqMiguel);
console.log();

// Resultados con puntuación aleatoría para los equipos de Juan y Miguel.
console.log(`----- Cálculos con datos aleatorios para Juan y Miguel -----`);
puntosEqJuan = obtenerPuntos(3);
puntosEqMiguel = obtenerPuntos(3);
console.log(imprimirPuntos(puntosEqJuan, "Juan"));
mediaEqJuan = calcularMedia(puntosEqJuan);
console.log(`La puntuación media del equipo de Juan es: %.2f.`, mediaEqJuan);
console.log(imprimirPuntos(puntosEqMiguel, "Miguel"));
mediaEqMiguel = calcularMedia(puntosEqMiguel);
console.log(
  `La puntuación media del equipo de Miguel es: %.2f.`,
  mediaEqMiguel
);
equipoGanador = obtenerGanador("Juan", mediaEqJuan, "Miguel", mediaEqMiguel);
console.log();

// Añadimos los puntos de María.
console.log(`----- Cálculos con los puntos de los tres equipos -----`);
let mediaEqMaria = calcularMedia(puntosEqMaria);
console.log(imprimirPuntos(puntosEqMaria, "Maria"));
console.log(`La puntuación media del equipo de Maria es: %.2f.`, mediaEqMaria);

// Resultado del equipo ganador de entre los tres (Juan, Miguel y María).
if (equipoGanador == "Juan") {
  equipoGanador = obtenerGanador(
    equipoGanador,
    mediaEqJuan,
    "Maria",
    mediaEqMaria
  );
} else if (equipoGanador == "Miguel") {
  equipoGanador = obtenerGanador(
    equipoGanador,
    mediaEqMiguel,
    "Maria",
    mediaEqMaria
  );
} else if (mediaEqJuan == mediaEqMaria) {
  console.log(
    `Hay empate entre los 3 equipos y la media de puntuacion es: %.2f.`,
    mediaEqJuan
  );
} else if (mediaEqJuan > mediaEqMaria) {
  console.log(
    `Hay empate entre los equipos de Juan y Miguel la media de puntuacion es: %.2f.`,
    mediaEqJuan
  );
} else {
  console.log(
    `El equipo ganador es el equipo de María y la puntuacion media es: %.2f.`,
    mediaEqMaria
  );
}

/* 
Ejemplos de ejecución

----- Cálculos con los datos del enunciado ----- 
Los puntos del equipo de Juan son:  89 - 120 - 103
La puntuación media del equipo de Juan es: 104.00
Los puntos del equipo de Miguel son:  116 - 94 - 123
La puntuación media del equipo de Miguel es: 111.00
El equipo ganador es el equipo de Miguel y la puntuacion media es: 111.00 

----- Cálculos con los mismos puntos en ambos equipos para forzar el empate -----
Los puntos del equipo de Juan son:  77 - 124 - 129
La puntuación media del equipo de Juan es: 110.00
Los puntos del equipo de Miguel son:  77 - 124 - 129
La puntuación media del equipo de Miguel es: 110.00
Hay empate entre los equipos de Juan y Miguel y la media de puntuacion es: 110.00 

----- Cálculos con datos aleatorios para Juan y Miguel -----
Los puntos del equipo de Juan son:  132 - 107 - 89
La puntuación media del equipo de Juan es: 109.33
Los puntos del equipo de Miguel son:  94 - 110 - 97
La puntuación media del equipo de Miguel es: 100.33
El equipo ganador es el equipo de Juan y la puntuacion media es: 109.33

----- Cálculos con los puntos de los tres equipos -----
Los puntos del equipo de Maria son:  97 - 134 - 105
La puntuación media del equipo de Maria es: 112.00
El equipo ganador es el equipo de Maria y la puntuacion media es: 112.00

*/
