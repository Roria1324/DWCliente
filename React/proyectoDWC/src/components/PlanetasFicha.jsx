import React, { useState, useEffect } from "react";
import { traerDatosBien } from "../libraries/traerDatos.js";
import "./PlanetasFicha.css";
import Planeta from "./Planeta.jsx";

const PlanetasFicha = () => {
  // Estado para los planetas.
  const [planetas, setPlanetas] = useState([]);
  // Endpoint para la llamada.
  const urlPlanetas = "https://swapi.dev/api/planets";
  // Función asíncrona para la carga del componente.
  const traerPlanetas = async (url) => {
    try {
      const planetas = await traerDatosBien(url);
      setPlanetas(planetas);
    } catch (error) {
      console.log(`Error en traerPanetas: ${error.message}`);
      //Aquí se gestionaría un estado con los errores.
    }
  };

  //Se cargan los planetas en el montaje del componente.
  useEffect(() => {
    traerPlanetas(urlPlanetas);
  }, []);

  return (
    <>
      <div className='planetasFicha_contenedor'>
        <h2>Fichas de planetas.</h2>
        {Array.isArray(planetas) && planetas.length
          ? planetas.map((planeta, index) => {
              return <Planeta key={index} datos={planeta} />;
            })
          : "No se han encontrado fichas para los planetas."}
      </div>
    </>
  );
};

export default PlanetasFicha;
