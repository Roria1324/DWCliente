import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FilmFetcher from './Componentes/FilmFetcher'
import { StarWarsProvider } from './Context/StarWarsContext'


function App() {
  return (
    <StarWarsProvider>
    <div className='contenedor-principal'>
        <FilmFetcher></FilmFetcher>
    </div>
    </StarWarsProvider>
  )
}

export default App
