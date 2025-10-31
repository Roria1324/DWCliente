"use strict";

function validarProducto(
  nombre = "Producto Genérico.",
  precio = 100,
  impuesto = 21
) {
  if (isNaN(precio) || isNaN(impuesto)) {
    return `Error. Número(s) no valido(s).`;
  } else {
    let precioFinal = precio + (precio * impuesto) / 100;
    return `Producto: ${nombre}   -   Precio: ${precioFinal}`;
  }
}

export { validarProducto };
