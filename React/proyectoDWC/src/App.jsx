import React, { useContext } from "react";
import "./App.css";
import Rutas from "./routes/Rutas.jsx";
import Menu from "./components/menu/Menu.jsx";
import Contenedor from "./components/Contenedor.jsx";
import { contextoSesion } from "./context/ProveedorSesion.jsx";
import CerrarSesion from "./components/sesion/CerrarSesion.jsx";

function App() {
  const { sesionIniciada } = useContext(contextoSesion);
  return (
    <>
      <Contenedor>
        <h2>Rutas con React.</h2>
        <p>Contenido estático.</p>
        <div>{sesionIniciada && <CerrarSesion />}</div>
      </Contenedor>
      <Contenedor>
        <Menu />
      </Contenedor>
      <Contenedor>
        <Rutas />
      </Contenedor>
      <Contenedor>Pie de página (estático).</Contenedor>
    </>
  );
}

export default App;
