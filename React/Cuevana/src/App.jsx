import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contenedor from './Componentes/Contenedor.jsx'
import Interprete from './Componentes/Interprete.jsx'

function App() {
  return (
    <>
      <Contenedor>
        <Interprete nombre="cilantro" foto="https://i.pinimg.com/236x/74/7b/ae/747bae2d2f9d18a07d9064650ce2f962.jpg">
        </Interprete>
        Hola
      </Contenedor>
    </>
  )
}

export default App
