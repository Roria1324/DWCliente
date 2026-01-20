import React from "react";
import CrearCuenta from "../components/sesion/CrearCuenta.jsx";
import IniciarSesion from "../components/sesion/IniciarSesion.jsx";

const SupabaseLogin = () => {
  return (
    <>
      <IniciarSesion />
      <CrearCuenta />
    </>
  );
};

export default SupabaseLogin;
