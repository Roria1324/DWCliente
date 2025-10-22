import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Rutas from './Router/Rutas.jsx'
import Menu from './Componentes/Submenu/Menu.jsx'



function App() {
  return (
    <>
    <Menu/>
    <Rutas/>
    </>
  );
};

export default App
