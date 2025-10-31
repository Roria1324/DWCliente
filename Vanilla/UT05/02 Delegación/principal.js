"use strict";

import { agregarEvento, agregarBoton } from "./bibliotecas/biblioteca.js";

let botones = document.getElementsByTagName("button");
let contenedor = document.getElementById("contenedor");

document.getElementById("nuevoBoton").addEventListener("click", () => {
  agregarBoton();
});
