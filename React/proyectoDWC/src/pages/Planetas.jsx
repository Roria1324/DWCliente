import React, { useEffect, useState } from "react";
import { traerDatos } from "../libraries/traerDatos.js";

const Planetas = () => {
  const url = "https://swapi.dev/api/planets/1";
  // Dos estados ya que es necesario dibujar los datos en el DOM.
  const [tatooine, setTatooine] = useState({});
  const [residentes, setResidentes] = useState([]);

  const traerTatooine = async () => {
    const datos = await traerDatos(url);
    setTatooine(datos);
  };

  useEffect(() => {
    // 1.- Carga inicial: obtener la información de Tatooine.
    traerTatooine();

    // 2.- Cuando tenga la infromación: obtener residentes. ¿Dependencia?
    // 3.- Cuando tenga los planetas: pintar sus nombres.
  }, []);

  const traerResidentes = async () => {
    //console.log(tatooine.residents);
    let listado = [];
    const promesasResidentes = tatooine.residents.map((residente) => {
      return traerDatos(residente);
    });
    //console.log(promesasResidentes);
    const datosResidentes = await Promise.allSettled(promesasResidentes);
    //console.log(datosResidentes);

    setResidentes(datosResidentes);
  };

  useEffect(() => {
    tatooine.residents && traerResidentes();
  }, [tatooine]);

  return (
    <>
      <h2>Planeta {tatooine.name ? tatooine.name : "sin nombre"}</h2>
      <h3>Residentes</h3>
      <div>
        {residentes.length
          ? residentes.map((residente, indice) => {
              return <p key={indice}>{residente.value.name}</p>;
            })
          : "No hay residentes, todavía."}
      </div>
    </>
  );
};

export default Planetas;
