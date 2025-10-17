"use strict";

import  accederBody from "./biblioteca/ejercicio1.js";
import {crearTabla,  colorNumero} from "./biblioteca/ejercicio2.js";
import {cambiarColor, seleccionarParrafo} from "./biblioteca/ejercicio3.js"
import carruselImagenes from "./biblioteca/ejercicio4.js";

crearTabla();

setTimeout (() => {accederBody(), colorNumero()}, 2000);

setInterval(() => { cambiarColor(seleccionarParrafo())},1000);

carruselImagenes();