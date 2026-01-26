import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Start from "./pages/Start";
import Route from "./rutas/Router.jsx";
import { useContext } from "react";
import { sessionContext } from "./context/SupabaseSesion.jsx";
import CloseSession from "./pages/CloseSession.jsx";

function App() {
  return (
    <>
      <Header />
      <Route />
      <Footer />
    </>
  );
}

export default App;
