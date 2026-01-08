import React from 'react'
import CharacterDetail from './CharacterDetail.jsx'
import { useState } from 'react'
import './CharacterList.css'

const CharacterList = ({characters}) => {

    const [selected, setSelected] = useState(null)

  return (
    <div>
        <h3>Personajes</h3>

        <ul className='listado'>
            {characters.map((chart, i) => (
                <li key={i} onClick={() => setSelected(chart)}>
                    {chart.name}
                </li>
            ))}
        </ul>
        {selected && <CharacterDetail character={selected} />}
    </div>
  )
}

export default CharacterList