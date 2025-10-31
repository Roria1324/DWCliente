"use strict";

// Se importa la función esNUmero de la bibnlioteca general.
import { esNumero } from "../../../funciones.js";

function calcularImc(altura, peso) {
  let imc = 0;
  if (esNumero(altura) && esNumero(peso)) {
    imc = peso / (altura * altura);
  } else {
    console.log(
      `Los valoes que has introducido no son válidos: ${altura} o ${peso}.`
    );
  }
  return imc;
}

export { calcularImc };
