import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Rutas from './Router/Rutas.jsx'
import Menu from './Componentes/Submenu/Menu.jsx'
import Footer from './Componentes/Submenu/Footer.jsx'


function App() {
  return (
    <>
    <div className="app">
      <Menu />
      <main className="main">
        <Rutas />
      </main>
      <Footer />
    </div>
    </>
  );
};

export default App
