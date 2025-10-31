"use strict";

import { validarProducto } from "./bibliotecas/ejercicio4.js";

console.log(validarProducto());
console.log(validarProducto("Pelota", "q", 15));
console.log(validarProducto("Pelota", 50));
console.log(validarProducto("TV FHD", 875, 21));
