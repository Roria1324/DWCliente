import React from "react";
import listado from "../../assets/objetos/discentes.json";
import { Link } from "react-router-dom";

const AdminDiscentes = () => {
  return (
    <>
      <h3>Administración de discentes.</h3>
      <div>
        {listado.discentes.length
          ? listado.discentes.map((elemento) => {
              return (
                <p>
                  {elemento.apellidos}, {elemento.nombre}
                </p>
              );
            })
          : "No se han encontrado discentes."}
      </div>
    </>
  );
};

export default AdminDiscentes;

/* //  Se utiliza template literals para concatenar el id del discente a la URL.
                <Link
                  key={elemento.id}
                  to={`/administracion/discentedetalle/${elemento.id}`}
                >
                  <p>
                    {elemento.apellidos}, {elemento.nombre}
                  </p>
                </Link> */
