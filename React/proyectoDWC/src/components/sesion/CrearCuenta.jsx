import React, { useContext } from "react";
import { contextoSesion } from "../../context/ProveedorSesion.jsx";

const CrearCuenta = () => {
  const { errorUsuario, crearCuenta, actualizarDato } =
    useContext(contextoSesion);
  // Importar las funciones desde un contexto adecuado.
  return (
    <div className='cuentaUsuario'>
      <h2>Crea una nueva cuenta</h2>
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
        <label htmlFor='password'>Contraseña</label>

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
            crearCuenta();
          }}
        >
          Crear cuenta
        </button>
      </p>
      <p>{errorUsuario}</p>
    </div>
  );
};

export default CrearCuenta;
