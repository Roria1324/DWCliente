import React, { useState } from "react";
import { generarVerduraAleatorio } from "../../bibliotecas/funciones.js";
import "./StateVerduras.css";
import ValorEstado from "../tools/ValorEstado.jsx";

function StateVerduras() {
  const valorInicial = ["Apio", "Calabacín", "Pimiento", "Calabaza", "Cebolla"];

  const [verduras, setVerduras] = useState(valorInicial);

  const anadirVerdura = (nuevaVerdura) => {
    setVerduras([...verduras, nuevaVerdura]);
  };

  /* const borrarVerdura = (nuevaVerdura) => {
    const nuevasVerduras = verduras.filter((verdura) => {
      return verdura !== nuevaVerdura;
    });
    setVerduras(nuevasVerduras);
  }; */

  /* const actualizarVerdura = (nuevoNombre) => {
    const nuevasVerduras = verduras.map((verdura) => {
      return verdura === nuevoNombre ? `${verdura} <-- ¡Cambiado!` : verdura;
    });
    setVerduras(nuevasVerduras);
  }; */

  /* const limpiarVerdura = () => {
    setVerduras([]);
  }; */

  /* const iniciarVerdura = () => {
    setVerduras(valorInicial);
  }; */

  /* const borrarVerdura_ahora_es_personal = (identificador) => {
    console.log(identificador);
    const nuevasVerduras = verduras.filter((verdura, indice) => {
      return parseInt(identificador) !== indice;
    });
    setVerduras(nuevasVerduras);
  }; */

  // Código JSX.
  return (
    <>
      <div>
        <h1>Verduras</h1>
        <p>
          <button
            onClick={() => {
              anadirVerdura(generarVerduraAleatorio());
            }}
          >
            Añadir
          </button>
        </p>
      </div>
      <div className='stateVerduras_listado'>
        <div className='stateVerduras_verduras'>
          {verduras.map((verdura, indice) => {
            // Uso el randomUUID como key para que no salte la davertencia por consola.
            return (
              <p id={indice} key={crypto.randomUUID()}>
                {verdura}
              </p>
            );
          })}
        </div>
        <div className='stateVerduras_estado'></div>
      </div>
    </>
  );
}

export default StateVerduras;
