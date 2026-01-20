import React, { useContext } from "react";
import { contextoSupabase } from "../../context/ProveedorSupabase.jsx";
import ListadoFeo from "./ListadoFeo.jsx";

const ListadoFeos = () => {
  /**
   * Se importa el estado desde el contexto.
   */
  const { feos, filtrarFeos, ordenarFeos } = useContext(contextoSupabase);
  return (
    <>
      <div>
        <button
          onClick={() => {
            filtrarFeos();
          }}
        >
          Filtrar feos
        </button>
        <button
          onClick={() => {
            ordenarFeos();
          }}
        >
          Ordenar Feos ascendentemente
        </button>
        <button
          onClick={() => {
            ordenarFeos(false);
          }}
        >
          Ordenar Feos descendentemente
        </button>
      </div>
      <div>
        {feos.length && Array.isArray(feos)
          ? feos.map((feo) => {
              return <ListadoFeo datos={feo} />;
            })
          : "No se han encontrado feos, todavía."}
      </div>
    </>
  );
};

export default ListadoFeos;
