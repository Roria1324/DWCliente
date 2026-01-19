import React, { useContext } from "react";
import "./CerrarSesion.css";
import { contextoSesion } from "../../context/ProveedorSesion.jsx";

const CerrarSesion = () => {
  const { cerrarSesion } = useContext(contextoSesion);
  // Se imprime el objeto por consola con fines didácticos.
  // No hacer en producción.
  //console.log(usuario);
  return (
    <div className='cerrarsesion__cerrar'>
      <button
        onClick={() => {
          cerrarSesion();
        }}
      >
        Cerrar sesión
      </button>
    </div>
  );
};

export default CerrarSesion;
