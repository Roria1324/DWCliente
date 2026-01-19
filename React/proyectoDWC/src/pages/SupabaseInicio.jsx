import React, { useContext } from "react";
import { contextoSesion } from "../context/ProveedorSesion.jsx";
import CerrarSesion from "../components/sesion/CerrarSesion.jsx";

const SupabaseInicio = () => {
  const { sesionIniciada } = useContext(contextoSesion);
  return (
    <>
      <p>Esta es la página de incio de Supabase.</p>
    </>
  );
};

export default SupabaseInicio;
