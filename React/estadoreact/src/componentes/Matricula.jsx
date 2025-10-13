import React, { useState } from "react";
import discentesData from "./matriculados.json";
import Discente from "./Discente.jsx";
import './Matricula.css'

export default function Matricula() {
  
  //Estados principales.
  //Representa la lista actualmente visible, aunque puede no mostrar todos los alumnos esto dependerá de los filtros.
  const [discentes, setDiscentes] = useState(discentesData.discentes);
  
  //Contiene la lista viva de discendentes (sin los desmatriculados).
  const [todos, setTodos] = useState(discentesData.discentes);
  
  //Unicamente usado en el orden de los apellidos.
  const [ascendente, setAscendente] = useState(true);


  //Los siguientes filtros, devuelve una lista con los datos que le interesen al cliente.
  const filtrarCurso2DAW = () => {
    setDiscentes(todos.filter(d => d.curso === "2DAW"));
  };

  const filtrarPrimerCurso = () => {
    setDiscentes(todos.filter(d => d.curso.startsWith("1")));
  };

  const filtrarCicloDAW = () => {
    setDiscentes(todos.filter(d => d.curso.includes("DAW")));
  };

  const filtrarLectura = () => {
    setDiscentes(todos.filter(d => 
      d.aficiones.some(a => a.toLowerCase().includes("lectura") || a.toLowerCase().includes("leer"))
    ));
  };

  //Ordena alfabéticamente los discentes visibles por apellidos.
  //Nos dará el orden de A -> Z, hasta que se vuelva a dar click en el filtro, después esta se invertirá.
  const ordenarPorApellidos = () => {
    const copia = [...discentes].sort((a, b) => 
      ascendente
        ? a.apellidos.localeCompare(b.apellidos)
        : b.apellidos.localeCompare(a.apellidos)
    );
    setDiscentes(copia);
    setAscendente(!ascendente);
  };
//Restaura el estado original de los datos desde el JSON
//He decidido poner el estado Ascendente porque considero que es más cómodo tenerla ordenada alfabéticamente desde el principio para hacer bien las comprobaciones.
  const reiniciar = () => {
    setTodos(discentesData.discentes);
    setDiscentes(discentesData.discentes);
    setAscendente(true);
  };
//Filtra de entre todos los usuarios que hay para que aquel que coincida sea eliminado (por tanto no se verá en los demás filtros), hasta que el cliente quiera reiniciar la lista.
  const desmatricular = (id) => {

    const nuevos = todos.filter(d => d.id !== id)
    setTodos(nuevos);

    setDiscentes(prev => prev.filter(d => d.id !== id));
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
          <button onClick={ordenarPorApellidos}> Ordenar por apellidos</button>
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
