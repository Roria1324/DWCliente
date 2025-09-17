import React from "react";
import "./App.css";
import logoReact from "./assets/react.svg";

function App() {
  // Código JavaScript Vanilla.
  let ancho = 300;

  return (
    <>
      {/* Código JSX con muy poco JavaScript: operador ternario, método map y variables (nunca objetos). */}
      <img width={ancho} src={logoReact}></img>
      <h2>Desarrollo Web en Entorno Cliente.</h2>
      <h3>¡Hola, Feos!</h3>
    </>
  );
}

export default App;
