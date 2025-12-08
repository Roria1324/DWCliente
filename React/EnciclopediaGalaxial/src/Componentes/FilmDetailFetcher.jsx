import React from 'react'
import obtenerDatos from '../Api/obtenerInfo.js'
import FilmDetail from './FilmDetail.jsx'
import { useState, useEffect } from 'react'

const FilmDetailFetcher = ({film}) => {

    const [characters, setCharacters] = useState([]);
    useEffect(() => {

        //Function que carga los personajes de LA película que se ha hecho click.
        const cargarPersonajes = async () => {
            const primerasDiez = film.characters.slice(0,10);

            const promesas = primerasDiez.map(url => obtenerDatos(url));
            //Espero a que TODAS las promesas finalicen.
            const results = await Promise.all(promesas);

            setCharacters(results);
        }

        cargarPersonajes()
    }, [film])

  return (
    <FilmDetail film={film} characters={characters} />
  )
}

export default FilmDetailFetcher