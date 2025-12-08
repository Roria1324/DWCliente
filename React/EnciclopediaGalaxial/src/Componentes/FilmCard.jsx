import React from 'react'
import './FilmCard.css'

const FilmCard = ({film, onClick}) => {
  return (
    <div className='film-card' onClick={onClick}>
        <h3>{film.title}</h3>
        <p>Episode {film.episode_id}</p>
    </div>
  )
}

export default FilmCard