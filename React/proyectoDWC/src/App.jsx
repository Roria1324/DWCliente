import React from "react";
import "./App.css";
import StateAviso from "./components/useState/StateAviso.jsx";
import StateContador from "./components/useState/StateContador.jsx";
import Discentes from "./components/json/Discentes.jsx";
import StateObjetos from "./components/useState/StateObjetos.jsx";
import StateVerduras from "./components/useState/StateVerduras.jsx";

function App() {
  // Código JavaScript Vanilla.
  let ancho = 300;

  {
    /* Código JSX con muy poco JavaScript: operador ternario, método map y variables (nunca objetos). */
  }
  return (
    <>
      <h2>Desarrollo Web en Entorno Cliente.</h2>

      <StateVerduras />
    </>
  );
}

export default App;
