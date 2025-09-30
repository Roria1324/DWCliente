import React, { useState } from "react";
import "./StateObjetos.css";
import {
  generarNombreAleatorio,
  generarApellidosAleatorio,
} from "../../bibliotecas/funciones.js";
import ValorEstado from "../tools/ValorEstado.jsx";

function StateObjetos() {
  // Si se trabaja con objetos es buena idea tener un "reinicio".
  const estadoInicial = [];
  // Se crea el componente con el estado inicial de valores.
  let [prueba, setPrueba] = useState(estadoInicial);

  const addObjeto = () => {
    // Se genera el objeto con el nombre de forma aleatoria.
    let objeto = {
      nombre: generarNombreAleatorio(),
      apellidos: `${generarApellidosAleatorio()} ${generarApellidosAleatorio()}`,
    };
    setPrueba([...prueba, objeto]);
  };

  return (
    <>
      <button
        onClick={() => {
          addObjeto();
        }}
      >
        Añadir objeto
      </button>
      <div className='objetos-div'>
        {/* Imprimir el estado (Objeto) para comprobar su comportamiento.*/}
      </div>
    </>
  );
}

export default StateObjetos;
