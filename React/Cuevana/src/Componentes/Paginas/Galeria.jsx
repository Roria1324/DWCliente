import React from 'react'
import peliculas from "../../Data/ElencoPelicula.json"
import MenuGaleria from "../Submenu/MenuGaleria"
import "./Galeria.css"

//Componente que muestra las carteleras que hay.
const Galeria = () => {

    const galeria = peliculas.peliculas

  return (
    <>
        
       <div className="layout-galeria">
            <aside className="aside">
                <MenuGaleria />
            </aside>

            <div className="galeria">
                {galeria.map((v) => (
                <div className="contenedor-foto" key={v.id}>
                    <img
                    src={v.fotoPelicula}
                    alt={v.nombrePelicula}
                    className="foto-pelicula"
                    />
                </div>
                ))}
            </div>
        </div>

    </>
  )
}

export default Galeria