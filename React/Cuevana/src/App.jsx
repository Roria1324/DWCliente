import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contenedor from './Componentes/Contenedor.jsx'
import Interprete from './Componentes/Interprete.jsx'
import Pelicula from './Componentes/Pelicula.jsx'
import Taquilla from './Componentes/Taquilla.jsx'


function App() {
  return (
    <>
    <Pelicula nameFilm="Dexter" director="James Manos Jr." foto="https://m.media-amazon.com/images/I/81JKXT1j0OL._UF1000,1000_QL80_.jpg">
      Sinopsis:
        La serie Dexter trata sobre Dexter Morgan, un analista forense de salpicaduras de sangre que trabaja para la policía de Miami y que, en secreto, es un asesino en serie. Él solo caza y asesina a otros criminales que han eludido la justicia, operando bajo un código moral establecido por su padre adoptivo, Harry Morgan. 
      <Contenedor>
        Reparto
        <Interprete />
        <Taquilla> 110.000 $ anuales</Taquilla>
      </Contenedor>
      
    </Pelicula>
    </>
  );
};

export default App
