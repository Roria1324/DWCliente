import React from 'react'
import CharacterList from './CharacterList.jsx'
import './FilmDetail.css'

const FilmDetail = ({film, characters}) => {
  return (
    <div className='contenedor-info'>
        <h2>{film.title}</h2>

        <p><strong>Director:</strong> {film.director}</p>
        <p><strong>Estreno:</strong> {film.release_date}</p>

        <CharacterList characters={characters} />
    </div>
  )
}

export default FilmDetail