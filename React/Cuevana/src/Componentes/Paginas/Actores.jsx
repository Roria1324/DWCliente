"use strict"
import peliculas from "../../Data/ElencoPelicula.json"

const Actores = () => {
    const actores = peliculas.peliculas
    return (
        <>
            {actores.map((v, i) => (
                <div key={i} className="actores-container">
                    {v.elencoPelicula.map((v, j) => (
                        <div key={j} className="interprete-first">
                        <div className="info">
                            <img src={v.foto} alt={v.nombre} className="foto"/>
                            <div className="nombre">
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