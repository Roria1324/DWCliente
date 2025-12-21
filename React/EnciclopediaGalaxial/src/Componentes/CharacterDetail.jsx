import React, { useState } from 'react'
import './CharacterDetail.css'
import { useStarWars } from '../Context/StarWarsContext'

const CharacterDetail = ({character}) => {

  const { fetchData } = useStarWars();
  const [vehiculos, setVehiculos ] = useState([]);
  const [mensaje, setMensaje] = useState("");

  const cargarVehiculos = async () => {
    const urls = [...character.vehicles, ...character.starships];

    if (urls.length === 0) {
      setMensaje("Este personaje no pilota naves ni vehículos.");
      setVehiculos([]);
      return;
    }

    const promesas = urls.map(url => fetchData(url));
    const resultados = await Promise.all(promesas);
  
    setVehiculos(resultados);
    setMensaje("");
  };




  return (
    <div className='character-detail'>
      <h4>{character.name}</h4>

      <p><strong>Género:</strong> {character.gender}</p>
      <p><strong>Altura:</strong> {character.height} cm</p>
      <p><strong>Peso:</strong> {character.mass} kg</p>
      <p><strong>Pelo:</strong> {character.hair_color}</p>
      <p><strong>Ojos:</strong> {character.eye_color}</p>

      <button className='vehiculos' onClick={cargarVehiculos}>Pilota</button>

      {mensaje && <p>{mensaje}</p>}

      {vehiculos.map((v, i) => (
        <div key={i} className="vehiculo-card">
          <h5>{v.name}</h5>
          <p><strong>Modelo:</strong> {v.model}</p>
          <p><strong>Fabricante:</strong> {v.manufacturer}</p>
        </div>
      ))}
    </div>
  )
}

export default CharacterDetail