import React, { useState } from "react";
import discentesData from "./matriculados.json";
import Discente from "./Discente.jsx";
import './Matricula.css'

export default function Matricula() {
  const [discentes, setDiscentes] = useState(discentesData.discentes);
  const [original] = useState(discentesData.discentes);
  const [ascendente, setAscendente] = useState(true);

  const filtrarCurso2DAW = () => {
    setDiscentes(original.filter(d => d.curso === "2DAW"));
  };

  const filtrarPrimerCurso = () => {
    setDiscentes(original.filter(d => d.curso.startsWith("1")));
  };

  const filtrarCicloDAW = () => {
    setDiscentes(original.filter(d => d.curso.includes("DAW")));
  };

  const filtrarLectura = () => {
    setDiscentes(original.filter(d => 
      d.aficiones.some(a => a.toLowerCase().includes("lectura") || a.toLowerCase().includes("leer"))
    ));
  };

  const ordenarPorApellidos = () => {
    const copia = [...discentes].sort((a, b) => 
      ascendente
        ? a.apellidos.localeCompare(b.apellidos)
        : b.apellidos.localeCompare(a.apellidos)
    );
    setDiscentes(copia);
    setAscendente(!ascendente);
  };

  const reiniciar = () => {
    setDiscentes(original);
    setAscendente(true);
  };

  const desmatricular = (id) => {
    setDiscentes(discentes.filter(d => d.id !== id));
  };

  return (

    <>
      <div className="matricula-container">
        <h1>Listado de Discentes</h1>

        <div className="botones-filtro">
          <button onClick={filtrarCurso2DAW}>Mostrar 2DAW</button>
          <button onClick={filtrarPrimerCurso}>Mostrar 1º curso</button>
          <button onClick={filtrarCicloDAW}>Mostrar ciclo DAW</button>
          <button onClick={filtrarLectura}>Afición: Lectura</button>
          <button onClick={ordenarPorApellidos}> Ordenar</button>
          <button onClick={reiniciar}>Reiniciar</button>
        </div>

        {discentes.length === 0 ? (
          <p>No hay discentes para mostrar.</p>
        ) : (
          discentes.map((d) => (
            <Discente 
            key={d.id} 
            discente={d} 
            onDesmatricular={desmatricular} />
          ))
        )}
      </div>
    </>
  );
}
