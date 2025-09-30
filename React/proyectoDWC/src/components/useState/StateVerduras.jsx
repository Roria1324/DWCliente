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

  const borrarVerdura = (nuevaVerdura) => {
    const nuevasVerduras = verduras.filter((verdura) => {
      return verdura !== nuevaVerdura;
    });
    setVerduras(nuevasVerduras);
  };

  // ¿No hay manera de mejorara la usabilidad de la funcionalidad borrarVerdura?

  const actualizarVerdura = (nuevoNombre) => {
    const nuevasVerduras = verduras.map((verdura) => {
      return verdura === nuevoNombre ? `${verdura} <-- ¡Cambiado!` : verdura;
    });
    setVerduras(nuevasVerduras);
  };

  const limpiarVerdura = () => {
    setVerduras([]);
  };

  const iniciarVerdura = () => {
    setVerduras(valorInicial);
  };

  const borrarVerdura_ahora_es_personal = (identificador) => {
    console.log(identificador);
    const nuevasVerduras = verduras.filter((verdura, indice) => {
      return parseInt(identificador) !== indice;
    });
    setVerduras(nuevasVerduras);
  };

  // Código JSX.
  return (
    <>
      <h1>Verduras</h1>
      <p>
        <button
          onClick={() => {
            anadirVerdura(generarVerduraAleatorio());
          }}
        >
          Añadir
        </button>
        <button
          onClick={() => {
            borrarVerdura("Pimiento");
          }}
        >
          Borrar
        </button>
        <button
          onClick={() => {
            actualizarVerdura("Cebolla");
          }}
        >
          Actualizar
        </button>
        <button
          onClick={() => {
            limpiarVerdura();
          }}
        >
          Limpiar
        </button>
        <button
          onClick={() => {
            iniciarVerdura();
          }}
        >
          Iniciar
        </button>
      </p>
      <div className='verduras-div'>
        <div
          onClick={(e) => {
            borrarVerdura_ahora_es_personal(e.target.id);
          }}
        >
          {verduras.map((verdura, indice) => {
            // Uso el randomUUID como key para que no salte la davertencia por consola.
            return (
              <p id={indice} key={crypto.randomUUID()}>
                {verdura}
              </p>
            );
          })}
        </div>
        <div>
          <ValorEstado estadoaMostrar={verduras} />
        </div>
      </div>
    </>
  );
}

export default StateVerduras;
