import React from "react";
import "./App.css";
import Rutas from "./routes/Rutas.jsx";
import { BrowserRouter } from "react-router-dom";
import Menu from "./components/menu/Menu.jsx";

function App() {
  /** Componenentes para crear rutas:
   *
   * -> instalar los paquetes necesarios : npm install react-router-dom,
   * -> <BrowserRoute> que conecta la aplicación a la URL del navegador,
   * -> <Routes> que genera un árbol de rutas y actúa como contenedor de ellas,
   * -> <Route> que representa una ruta en el árbol y necesita:
   *    -> path que es valor de la URL esperado (si coincide se activa),
   *    -> element que es el componente que se carga en <Routes> cuando coincida.
   * -> <Link> que sustituye a la etiqueta <a> de HTML para prevenir el funcionamiento por defecto y evitar que se recargue la página.
   *    -> to representa el valor de la URL que activará la ruta.
   * -> useNavigate es hook que permitirá controlar la navegación programaticamente.
   * */

  return (
    <>
      <h2>Desarrollo Web en Entorno Cliente.</h2>
    </>
  );
}

export default App;
