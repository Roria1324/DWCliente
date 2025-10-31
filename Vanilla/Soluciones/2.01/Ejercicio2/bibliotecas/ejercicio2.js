"use strict";

// Función para imprimir por pantalla los puntos de un equipo en los partidos jugados.
function imprimirPuntos(arrayPuntos, equipo) {
  let linea = "";
  for (let i = 0; i < arrayPuntos.length; i++) {
    if (i < arrayPuntos.length - 1) {
      linea = `${linea} ${arrayPuntos[i]} -`;
    } else {
      linea = `${linea} ${arrayPuntos[i]}`;
    }
  }
  return `Los puntos del equipo de ${equipo} son: ${linea}.`;
}

// Función que calcula la media de puntos de un equipo.
function calcularMedia(arrayPuntos) {
  let media = 0;
  for (let i = 0; i < arrayPuntos.length; i++) {
    media = arrayPuntos[i] + media;
  }
  return media / arrayPuntos.length;
}

// Función para rellenar aletorimente los puntos de un equipo a partir del número de partidos.
function obtenerPuntos(numPartidos) {
  let arrayPuntos = [];
  for (let i = 0; i < numPartidos; i++) {
    arrayPuntos[i] = Math.floor(Math.random() * 80) + 60;
  }
  return arrayPuntos;
}

// Función que de devuelve el nombre del equipo ganador. En caso de empate de devuelve "Empate".
function obtenerGanador(equipo1, mediaEq1, equipo2, mediaEq2) {
  // ¡¡CUIDADO!! Cuatro parámetros son demasiados. Hay que usar objetos (pero aún no sabemos).
  let ganador;
  if (mediaEq1 > mediaEq2) {
    ganador = equipo1;
    console.log(
      `El equipo ganador es el equipo de ${equipo1} y la puntuación media es: %.2f.`,
      mediaEq1
    );
  } else if (mediaEq1 < mediaEq2) {
    ganador = equipo2;
    console.log(
      `El equipo ganador es el equipo de ${equipo2} y la puntuación media es: %.2f.`,
      mediaEq2
    );
  } else {
    ganador = "Empate";
    console.log(
      `Hay empate entre los equipos de ${equipo1} y ${equipo2} y la media de puntuación es: %.2f.`,
      mediaEq1
    );
  }
  return ganador;
}

export { imprimirPuntos, calcularMedia, obtenerPuntos, obtenerGanador };
