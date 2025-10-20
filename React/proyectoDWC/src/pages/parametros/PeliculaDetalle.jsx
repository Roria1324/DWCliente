import React from "react";
import Interpretes from "../../../../Practica 2.08/componentes/Interpretes";
// Se importa el hook necesario desde React Router DOM.
import { useParams } from "react-router-dom";

const PeliculaDetalle = (props) => {
  // Se recoge el parámetro pasado a través de la ruta.
  const { feo } = useParams();
  // Se filtran los datos para obtener la película que interesa.
  const pelicula = props.listado.filter((valor) => {
    return valor.id === parseInt(feo);
  });
  // Se desestructura el objeto y se extrae la información requerida.
  const { nombre, cartelera, resumen, actores } = pelicula[0];
  /*****************************************************************
   * ¡¡¡ATENCIÓN!!!  -->  El método filter siempre devuelve un array
   *                      por lo que se debe utilizar la primera
   *                      posición de este array (en la que está el
   *                      objeto con la película que se necesita).
   * */

  return (
    <>
      <div className='pelicula'>
        <h2>{nombre}</h2>
        <div>
          <img src={cartelera}></img>
          <p className='resumen'>{resumen}</p>
        </div>
        <div>
          <h3>Elenco</h3>
          <div>
            <Interpretes interpretes={actores} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PeliculaDetalle;
