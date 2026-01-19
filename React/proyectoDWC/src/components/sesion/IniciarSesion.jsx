import React, { useContext } from "react";
import { contextoSesion } from "../../context/ProveedorSesion.jsx";

const IniciarSesion = () => {
  // Se obtienen los objetos necesarios desde el contexto.
  const { actualizarDato, iniciarSesionPassword, errorUsuario } =
    useContext(contextoSesion);

  return (
    <div className='cuentaUsuario'>
      <h2>Iniciar sesión</h2>
      <p>
        <label htmlFor='email'>Correo electrónico</label>
        <input
          type='email'
          name='email'
          id='email'
          placeholder='Su correo electrónico.'
          onChange={(e) => {
            actualizarDato(e);
          }}
        />
      </p>
      <p>
        <label htmlFor='email'>Contraseña</label>
        <input
          type='password'
          name='password'
          id='password'
          placeholder='Su contraseña.'
          onChange={(e) => {
            actualizarDato(e);
          }}
        />
      </p>
      <p>
        <button
          className='botonSesion'
          onClick={(e) => {
            iniciarSesionPassword();
          }}
        >
          Iniciar sesión
        </button>
      </p>

      <p>{errorUsuario}</p>
    </div>
  );
};

export default IniciarSesion;
