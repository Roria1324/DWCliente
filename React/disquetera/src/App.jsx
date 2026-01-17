import { useState } from 'react'
import './App.css'
import Menu from './Componentes/Menu/Menu.jsx'
import Rutas from './Router/Rutas.jsx'
import Footer from './Componentes/Menu/Footer.jsx'
import ProveedorDiscos from './contexto/ProveedorDiscos.jsx'
function App() {

  return (
    <>
      <ProveedorDiscos>
        <Menu/>
        <Rutas/>
        <Footer/>
      </ProveedorDiscos>  
    </>
  )
}

export default App