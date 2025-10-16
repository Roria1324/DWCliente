import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  return (
    // ¿Estilo a los enlaces?
    // ¿Añadimos <Login />?
    <>
      <nav>
        <Link className='menu-elemento' to='/'>
          Inicio
        </Link>
        <Link className='menu-elemento' to='/discentes'>
          Discentes
        </Link>
        <Link className='menu-elemento' to='/contacto'>
          Contacto
        </Link>
        <Link className='menu-elemento' to='/acerca-de'>
          Acerca de
        </Link>
      </nav>
    </>
  );
};

export default Menu;
