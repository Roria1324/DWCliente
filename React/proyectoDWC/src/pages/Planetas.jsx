import React from "react";
import "./Planetas.css";
import PlanetasListado from "../components/PlanetasListado.jsx";
import PlanetasFicha from "../components/PlanetasFicha.jsx";
import ProveedorPlanetas from "../context/ProveedorPlanetas.jsx";

const Planetas = () => {
  return (
    <>
      <div className='planetas_contenedor'>
        <ProveedorPlanetas>
          <PlanetasListado />
          <PlanetasFicha />
        </ProveedorPlanetas>
      </div>
    </>
  );
};

export default Planetas;
