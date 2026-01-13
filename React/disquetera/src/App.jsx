import { useState } from 'react'
import './App.css'
import Menu from './Componentes/Menu/Menu.jsx'
import Rutas from './Componentes/Router/Rutas.jsx'
import Footer from './Componentes/Menu/Footer.jsx'
function App() {

  return (
    <>
      <Menu/>
      <Rutas/>
      <Footer/>
    </>
  )
}

export default App
