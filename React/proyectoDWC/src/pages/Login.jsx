import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const permiso = false;
  const navegar = useNavigate();
  return (
    <>
      <p>Pulse para inciar sesión.</p>
      <button
        onClick={() => {
          permiso ? navegar("/peliculas") : navegar("/no-tines-permiso");
        }}
      >
        Comprobar si tiene sesión.
      </button>
    </>
  );
};

export default Login;
