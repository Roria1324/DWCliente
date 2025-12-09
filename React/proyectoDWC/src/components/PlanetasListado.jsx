import React, { useEffect, useState } from "react";
import { traerDatosBien } from "../libraries/traerDatos";
import "./PlanetasListado.css";

const PlanetasListado = () => {
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
      console.log(`Error en traerPlanetas: ${error.message}`);
      // Aquí se gestionaría un estado con los errores.
    }
  };

  //Se cargan los planetas en el montaje del componente.
  useEffect(() => {
    traerPlanetas(urlPlanetas);
  }, []);

  return (
    <>
      <div className='planetasListado_contenedor'>
        <h2>Listado de planetas.</h2>
        {Array.isArray(planetas) && planetas.length
          ? planetas.map((planeta, index) => {
              return <h3 key={index}>{planeta.name}</h3>;
            })
          : "No se han encontrado planetas en esta galaxia."}
      </div>
    </>
  );
};

export default PlanetasListado;
