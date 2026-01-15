import React from "react";
import CRUDBotones from "../components/CRUDFetch/CRUDBotones";
import ProveedorDiscentes from "../context/ProveedorDiscentes.jsx";
import CRUDListado from "../components/CRUDFetch/CRUDListado.jsx";

const CRUDFetch = () => {
  return (
    <>
      <ProveedorDiscentes>
        <CRUDBotones />
        <CRUDListado />
      </ProveedorDiscentes>
    </>
  );
};

export default CRUDFetch;
