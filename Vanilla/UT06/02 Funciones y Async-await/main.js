"use strict";

import { dibujarGentuza, dibujarPlanetas } from "./bibliotecas/manipularDOM.js";
import { traerPlanetas, traerDatos } from "./bibliotecas/traerDatos.js";

window.onload = () => {
  /********* Se seleccionan los elementos del DOM. ***********/

  const botonPlanetas = document.getElementById("botonPlanetas");
  const botonGentuza = document.getElementById("botonGentuza");
  const contenedorPlanetas = document.getElementById("planetas");
  const contenedorGentuza = document.getElementById("gentuza");

  /********* Origen de los datos. ***********************/

  const urlPlanetas = "https://swapi.info/api/planets";
  const urlGentuza = "https://swapi.info/api/people";

  /*************************************************************
   * Obtención y pintado de los datos. */

  //  console.log(traerPlanetas());

  /*************************************************************
   * Trabajando con eventos.
   *
   * Se pueden crear funciones para la obtención de los datos
   * y añadirlas a un evento con addEventListener.
   *
   */

  /* traerPlanetas().then((planetas) => {
      contenedorPlanetas.innerHTML = dibujarPlanetas(planetas);
    }); */

  botonPlanetas.addEventListener("click", async (evento) => {
    const planetas = await traerPlanetas();
    contenedorPlanetas.innerHTML = dibujarPlanetas(planetas);
  });

  /*************************************************************
   *  Async / Await
   *
   * ¿Y si se vuelve al sistema síncrono?
   *
   * Consumir promesas de forma "síncrona":
   *  - async, establece un ámbito asíncrono para el intérprete del código.
   *  - await, obliga al intérprete a "esperar" la ejecución del código asíncrono.
   *
   * Para utilizarlo hay que crear un ámbito y declararlo como asíncrono.
   * Lo idea es hacerlo en una función ya que es un ámbito pequeño y
   * controlable.
   *
   *
   */

  /* botonPlanetas.addEventListener("click", async (evento) => {
    let datos = await traerDatos(urlPlanetas);
    contenedorPlanetas.innerHTML = dibujarPlanetas(datos);
  }); */

  /**
   * ¡¡¡ATENCION!!! Evitar el modo "soyunprogramadorguayquenecesitareafirmacion"
   */
  /* const dibujarPlanetasModoGuay = async (url) => {
    let esperoEntendereloDentroDeUnMes = await (await fetch(url)).json();
    console.log(esperoEntendereloDentroDeUnMes);
  }; */

  const fea = new Promise((resolver, rechazar) => {
    setTimeout(() => {
      let numero = Math.floor(Math.random() * 101);
      numero % 2 === 0
        ? resolver(numero)
        : rechazar(new Error("El número es impar."));
    }, 2000);
  });

  /*  fea
    .then((datos) => {
      console.log(datos);
    })
    .catch((error) => {
      console.log(error.message);
    })
    .finally(() => {
      console.log("Se ha terminado el código asíncrono.");
    }); */

  const mostrarNumero = async () => {
    try {
      const numero = await fea;
      console.log(numero);
    } catch (error) {
      console.log(error.message);
    }
  };

  mostrarNumero();

  const urlFeos = "./feos.json";

  fetch(urlFeos)
    .then((respuesta) => {
      return respuesta.json();
    })
    .then((datos) => {
      console.log(datos);
    })
    .catch((error) => {
      console.log(error.message);
    })
    .finally(() => {
      console.log("Fin, pesado.");
    });

  //Nunca hacer asíncrono el window.load() -> ¿Por qué?
}; // Fin del window.load.
