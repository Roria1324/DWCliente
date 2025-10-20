import React from "react";
import { Link } from "react-router-dom";

const PeliculasListado = (props) => {
  const { listado } = props;
  return (
    <>
      <h3>ListadoPeliculas</h3>
      <div className='listadoPeliculas-listado'>
        {listado.length
          ? listado.map((elemento) => {
              return (
                <Link
                  key={crypto.randomUUID()}
                  to={`/pelicula-detalle/${elemento.id}`}
                >
                  <p className='listadoPeliculas-lista'>{elemento.nombre}</p>
                </Link>
              );
            })
          : "No se han encontrado películas"}
      </div>
    </>
  );
};

export default PeliculasListado;
