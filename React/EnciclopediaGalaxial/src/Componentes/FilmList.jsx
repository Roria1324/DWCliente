import React from 'react'
import FilmDetailFetcher from './FilmDetailFetcher'
import { useState } from 'react'
import FilmCard from './FilmCard';
import './FilmList.css'

const FilmList = ({films}) => {

    const [selectedFilm, setSelectedFilm] = useState(null);

  return (

    <div className='contenedor-peliculas'>
        <div className='lista'>
            {films.map(film => (
                <FilmCard key={film.episode_id} film={film} onClick={() => setSelectedFilm(film)} />
            ))}
        </div>
        { selectedFilm && (<FilmDetailFetcher film={selectedFilm} />)}
        
    </div>



    
  )
}

export default FilmList