import React from "react";
import Discente from "./Discente.jsx";

function Discentes() {
  const discentes = [
    {
      id: 1,
      nombre: "Feo",
      apellidos: "De verdad de la buena",
      curso: "2DAW",
      modulos: "DWC, DWS, DIW, DES",
    },
    {
      id: 2,
      nombre: "Fea",
      apellidos: "También De verdad",
      curso: "2DAW",
      modulos: "DWC, DWS, DIW",
    },
    {
      id: 3,
      nombre: "Horrible",
      apellidos: "De verdad",
      curso: "2DAW",
      modulos: "DWC",
    },
  ];

  /** Importar el fichero desde un archivo. */
  /* console.log(feo);
  const discentes = [...feo.discentes]; */

  return (
    <>
      <h1>Listado de discentes.</h1>
      <div>
        {discentes.map((v, i, a) => {
          return (
            <Discente
              key={v.id} // Id para componentes dentro de una iteración (si no existe id utilizar índice).
              nombre={v.nombre}
              apellidos={v.apellidos}
              curso={v.curso}
              modulos={v.modulos}
            />
          );
        })}
      </div>
    </>
  );
}

export default Discentes;
