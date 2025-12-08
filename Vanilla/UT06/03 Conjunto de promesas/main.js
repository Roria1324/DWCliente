"use strict";

import { traerDatos } from "../02 Funciones y Async-await/bibliotecas/traerDatos.js";

window.onload = () => {
  /************************************************************************
   * Conjunto de promesas
   *
   *  Permiten esvaluar un conjunto de promesas como una sola.
   *  Se dispone de:
   *
   *    all()         --> resuelve una promesa cuando TODAS las pasadas como parámetro sean fullfiled (resuelta).
   *    allSettled()  --> resuelve una promesa cuando TODAS estén en estado settled (arreglada).
   *    any()         --> resuelve una promesa cuando la PRIMERA de ellas esté fullfiled (resuelta).
   *    race()        --> resuelve una promesa con el resultado de la primera settled (arreglada).
   *                      (la primera en estar rechazada o resuleta).
   *
   */

  // Se usará el prototipo de Promise (es buena idea echarle un ojo).
  //console.log(Promise); //Se imprime el objeto para ver sus propiedades.
  // Se declaran cuatro promesas con resultados diferentes:

  var p1 = new Promise((resolver, rechazar) => {
    setTimeout(() => resolver("Uno"), 1100);
  });

  var p2 = new Promise((resolver, rechazar) => {
    setTimeout(() => resolver("Dos"), 900);
  });

  var p3 = new Promise((resolver, rechazar) => {
    let feo = 0;
    if (feo === 0) {
      setTimeout(() => resolver(`El valor de feo es ${feo}.`), 1500);
    } else {
      rechazar(new Error("Promise p3 rechazada."));
    }
  });

  /* var p4 = new Promise((resolver, rechazar) => {
    setTimeout(() => rechazar(new Error("Promise p4 rechazada.")), 5);
  }); */

  /***********************************************************************
   * Cuando todas las promesas sean resueltas.
   * Si falla una, fallan todas.
   * ¡Ojo!, se está utilizando el método del prototipo Promise.
   *
   * */

  /* const todas = Promise.all([p1, p2, p3]);
  // Se obtiene una promesa.
  console.log(todas);
  // Se consume esa promesa para acceder a los datos.
  todas
    .then((datos) => {
      console.log(datos);
      console.log(datos[0]);
    })
    .catch((error) => {
      console.error(error.message);
    }); */

  /***********************************************************************
   *  Todas se han realizado (fulfilled) independientemente de su resultado.
   *  Buena opción para manejar errores en las promesas.
   */

  /* const todasHechas = Promise.allSettled([p1, p2, p3, p4]);

  console.log(todasHechas);

  todasHechas
    .then((datos) => {
      let estado;
      datos.map((valor, indice, array) => {
        valor.status === "rejected"
          ? (estado = valor.reason)
          : (estado = valor.value);
        console.log(
          `La promesa "p${indice + 1}" ha sido "${
            valor.status
          }" con una valor de "${estado}".`
        );
      });
    })
    .catch((error) => {
      console.error(error.message);
    });
 */
  /***********************************************************************
   * Primera en estado "fullfiled".
   *
   */

  /* const primera = Promise.any([p1, p2, p4]);

  console.log(primera);

  primera
    .then((values) => {
      console.log(values); // Un valor solamente.
    })
    .catch((error) => {
      console.error(error.message);
    }); */

  /***********************************************************************
   * Primera en estado "settled".
   *
   */

  /* const masRapida = Promise.race([p1, p2, p4]);

  console.log(masRapida);

  masRapida
    .then((values) => {
      console.log(`${values} desde race()`); // Un sólo valor, el más rápido.
    })
    .catch((error) => {
      console.error(error.message);
    }); */

  /***********************************************************************
   * Un caso real.
   *
   */

  const url1 = "http://swapi.py4e.com/api/planets";
  const url2 = "https://swapi.dev/api/planets";
  const url3 = "https://swapi.info/api/planets";

  /* const todasBien = Promise.all([
    traerDatos(url1),
    traerDatos(url2),
    traerDatos(url3),
  ]);

  console.log(todasBien); */

  /* const promesas = [traerDatos(url1), traerDatos(url2), traerDatos(url3), p4];

  const todasTerminadas = Promise.allSettled(promesas);

  console.log(todasTerminadas); */

  /* const primeraResuelta = Promise.any([
    traerDatos(url1),
    traerDatos(url2),
    traerDatos(url3),
    p4,
  ]);

  console.log(primeraResuelta); */

  /* const masRapida = Promise.race([
    traerDatos(url1),
    traerDatos(url2),
    traerDatos(url3),
    p4,
  ]); */

  //console.log(masRapida);

  // ¿Cómo se consumen?

  /***********************************************************************
   * Caso práctico.
   *
   * Se necesitan los nombres de los residentes en Tatooine.
   *
   */

  const residentes = traerDatos("https://swapi.dev/api/planets/1")
    .then((datos) => {
      return datos.residents;
    })
    .catch((error) => {
      console.log(error.message);
    });

  residentes.then((residentes) => {
    const promesasResidentes = residentes.map((residente) => {
      return traerDatos(residente);
    });
    console.log(promesasResidentes);

    const resultadosResidentes = Promise.allSettled(promesasResidentes);

    resultadosResidentes.then((datosResidentes) => {
      datosResidentes.map((habitante) => {
        console.log(habitante.value.name);
      });
    });
  });
}; // Fin del window.load.
