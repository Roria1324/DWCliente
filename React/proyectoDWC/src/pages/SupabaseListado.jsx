import React, { useContext } from "react";
import CerrarSesion from "../components/sesion/CerrarSesion.jsx";
import { contextoSesion } from "../context/ProveedorSesion.jsx";

const SupabaseListado = () => {
  return (
    <>
      <p>Este contenido sólo debe estar disponible para usuarios registrados</p>
      <p>¿Cómo oculto esta información?</p>
    </>
  );
};

export default SupabaseListado;
