import React from "react";

const MenuAdmin = () => {
  return (
    <>
      <div className='menuadmin-navegacion'>
        <Link
          className='administracion-elementomenu'
          to='/administracion/discentes'
        >
          Discentes
        </Link>
        <Link className='menuadmin-elementomenu' to='/administracion/notas'>
          Notas
        </Link>
        <Link className='menuadmin-elementomenu' to='/administracion/usuarios'>
          Usuarios/as
        </Link>
      </div>
    </>
  );
};

export default MenuAdmin;
