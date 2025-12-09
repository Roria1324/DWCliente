import React from "react";
import "./Planetas.css";
import PlanetasListado from "../components/PlanetasListado.jsx";
import PlanetasFicha from "../components/PlanetasFicha.jsx";

const Planetas = () => {
  return (
    <>
      <div className='planetas_contenedor'>
        <PlanetasListado />
        <PlanetasFicha />
      </div>
    </>
  );
};

export default Planetas;
