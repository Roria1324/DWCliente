import React, { useContext } from "react";
import ValorEstado from "../tools/ValorEstado.jsx";
import { ContextoDiscentes } from "../../context/ProveedorDiscentes.jsx";

const CRUDListado = () => {
  /**
   * Consumir el contexto a través de un hook personalizado.
   *  -> importar el hook y
   *  -> desestructurar el objeto que devuelve (igual que con createContext).
   */
  const { discentes } = useContext(ContextoDiscentes);

  return (
    <>
      <ValorEstado estado={discentes} />
    </>
  );
};

export default CRUDListado;
