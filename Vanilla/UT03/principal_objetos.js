"use strict";

const clienteFeo = {
  nombre: "Nombre feo",
  apellidos: "Apellidos feos",
  saldo: 345.89,
  articulos: [],
  comprar: function (articulo) {
    this.articulos = [...this.articulos, articulo];
  },
  listar: function () {
    let resultado = this.articulos.map((articulo, i, a) => {
      return `El artículo ${i + 1} es ${
        articulo.nombre
      } vale ${articulo.precio.toLocaleString("es-ES", {
        style: "currency",
        currency: "EUR",
      })}.`;
    });
    return resultado;
  },
};

const articuloFeo = {
  nombre: "Libro Feo",
  precio: 19.9,
  descripcion: "Descripción fea",
};

clienteFeo.comprar(articuloFeo);
clienteFeo.comprar(articuloFeo);
clienteFeo.comprar(articuloFeo);
console.log(clienteFeo.listar());
