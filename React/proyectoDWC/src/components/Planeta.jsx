import React from "react";

const Planeta = ({ datos }) => {
  return (
    <>
      <div className='planeta_contenedor'>
        <h2>{datos.name}</h2>
        <p>
          Tiene una rotación de {datos.rotation_period} horas y una traslación
          de {datos.orbital_period} días. Tiene un clima {datos.climate}.
        </p>
      </div>
    </>
  );
};

export default Planeta;
