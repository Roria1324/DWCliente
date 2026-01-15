import React, { useEffect, useState, useContext } from "react";
import { traerDatosBien } from "../libraries/traerDatos";
import "./PlanetasListado.css";
import { ContextoPlanetas } from "../context/ProveedorPlanetas.jsx";

const PlanetasListado = () => {
  const { planetas, borrarPlanetas, error } = useContext(ContextoPlanetas);

  return (
    <>
      <div className='planetasListado_contenedor'>
        <button
          onClick={() => {
            borrarPlanetas();
          }}
        >
          Destruir galaxia.
        </button>
        <h2>Listado de planetas.</h2>
        {Array.isArray(planetas) && planetas.length
          ? planetas.map((planeta, index) => {
              return <h3 key={index}>{planeta.name}</h3>;
            })
          : "No se han encontrado planetas en esta galaxia."}
      </div>
      <div>{error}</div>
    </>
  );
};

export default PlanetasListado;
