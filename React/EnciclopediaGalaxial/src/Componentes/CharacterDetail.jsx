import React from 'react'
import './CharacterDetail.css'

const CharacterDetail = ({character}) => {
    //Validador para dar formatos a los datos que estén vacíos, un poco cutre a mi parecer pero así se queda. 
    const mostrarDatos = (valor) => {
        if (valor === null || valor === undefined || valor === "" || valor === "n/a"){
            return "unknown";
        }
        return valor;
    }

  return (
    <div className='character-detail'>
        <h4>{character.name}</h4>

        <p><strong>Género:</strong> {mostrarDatos(character.gender)}</p>
        <p><strong>Altura:</strong> {mostrarDatos(character.height)} cm</p>
        <p><strong>Peso:</strong> {mostrarDatos(character.mass)} kg</p>
        <p><strong>Pelo:</strong> {mostrarDatos(character.hair_color)}</p>
        <p><strong>Ojos:</strong> {mostrarDatos(character.eye_color)}</p>
    </div>
  )
}

export default CharacterDetail