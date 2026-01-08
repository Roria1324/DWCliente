import React, { useContext } from "react";
import ValorEstado from "../tools/ValorEstado.jsx";
import { ContextoDiscentes } from "../../context/ProveedorDiscentes.jsx";

const CRUDListado = () => {
  /**
   * Se obtiene el estado desde el contexto.
   */
  const { discentes } = useContext(ContextoDiscentes);

  return (
    <>
      <ValorEstado estado={discentes} />
    </>
  );
};

export default CRUDListado;
