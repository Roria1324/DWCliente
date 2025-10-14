import React from "react";

//Este componente representa un alumno en concreto.
export default function Discente({ discente, onDesmatricular }) {
  return (
    <div className="discente-card">
      <h3>{discente.nombre} {discente.apellidos}</h3>
      <p><strong>Curso:</strong> {discente.curso}</p>
      <p><strong>Aficiones:</strong> {discente.aficiones.join(", ")}</p>
      <p><strong>Comida favorita:</strong> {discente.comida}</p>
      <button onClick={() => onDesmatricular(discente.id)}>Desmatricular</button>
    </div>
  );
}