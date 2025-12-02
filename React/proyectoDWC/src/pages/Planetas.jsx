import React, { useEffect, useState } from "react";
import { traerDatos } from "../libraries/traerDatos.js";

const Planetas = () => {
  const url = "https://swapi.dev/api/planets/1";
  // Dos estados ya que es necesario dibujar los datos en el DOM.
  const [tatooine, setTatooine] = useState({});
  const [residentes, setResidentes] = useState([]);

  useEffect(() => {
    // 1.- Carga inicial: obtener la información de Tatooine.
    // 2.- Cuando tenga la infromación: obtener planetas. ¿Dependencia?
    // 3.- Cuando tenga los planetas: pintar sus nombres.
  }, []);

  return (
    <>
      <h2>Planeta {tatooine.name ? tatooine.name : "sin nombre"}</h2>
      <h3>Residentes</h3>
      <div>Listado de los planetas.</div>
    </>
  );
};

export default Planetas;
