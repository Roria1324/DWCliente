import React from 'react'
import FilmList from './FilmList'
import { useState, useEffect } from 'react'
import obtenerDatos from '../Api/obtenerInfo';

const FilmFetcher = () => {

    const [films, setFilms] = useState([]);

    useEffect(() => {
        const cargar = async () => {
            const datos = await obtenerDatos("https://swapi.info/api/films");
            setFilms(datos);
        }
        cargar()
    }, []);

  return (
    <FilmList films={films} />
  )
}

export default FilmFetcher