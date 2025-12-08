import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FilmFetcher from './Componentes/FilmFetcher'

function App() {
  return (
    <div className='contenedor-principal'>
        <FilmFetcher></FilmFetcher>
    </div>
  )
}

export default App
