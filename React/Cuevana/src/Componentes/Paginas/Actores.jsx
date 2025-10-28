"use strict"
import peliculas from "../../Data/ElencoPelicula.json"
import "./Actores.css"

const Actores = () => {
    const actores = peliculas.peliculas
    return (
        <>
            {actores.map((v, i) => (
                <div key={i} className="actores-container">
                    {v.elencoPelicula.map((v, j) => (
                        <div key={j} className="actores-first">
                        <div className="info-actor">
                            <img src={v.foto} alt={v.nombre} className="foto-actor"/>
                            <div className="nombre-actor">
                                <h1>{v.nombre}</h1>
                                <p>{v.bibliografia}</p>
                            </div>
                    </div>
                </div>
                    ))}
                </div>      
            ))}
        </>
    )
}

export default Actores