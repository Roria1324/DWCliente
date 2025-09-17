"use strict";

// Comprueba si los parámetros pasados son valores numéricos.
// En lo sucesivo habrá que hacer versiones de esta función para, además, hacer otras comprobaciones.
function esNumero() {
  // Se utiliza una bandera.
  let valido = true;
  // Se comprueban todos los parámetros.
  for (let i = 0; i < arguments.length; i++) {
    // Si alguno es falso, levanto la bandera.
    if (isNaN(arguments[i])) {
      valido = false;
      break;
    }
  }
  return valido;
}

export { esNumero };
