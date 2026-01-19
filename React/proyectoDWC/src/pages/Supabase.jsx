import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Contenedor from "../components/Contenedor";
import { contextoSesion } from "../context/ProveedorSesion.jsx";
import "./Supabase.css";

const Supabase = () => {
  return (
    <>
      <h2>Panel de administración.</h2>
      <nav className='supabase-navegacion'>
        <Link className='supabase-elementomenu' to='/supabase/inicio'>
          Inicio
        </Link>
        <Link className='supabase-elementomenu' to='/supabase/iniciarSesion'>
          Iniciar Sesión
        </Link>
        <Link className='supabase-elementomenu' to='/supabase/listado'>
          Listado
        </Link>
      </nav>
      <Contenedor>
        <Outlet />
      </Contenedor>
    </>
  );
};

export default Supabase;
