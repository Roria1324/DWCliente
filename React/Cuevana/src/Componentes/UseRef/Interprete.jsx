import React, {useRef} from "react";
import peliculas from "../../Data/ElencoPelicula.json"
import "./Interprete.css"
const Interprete = () => {
    const elenco = useRef(null);

        //Función que cambia dinámicamente el estilo display del elemento, alternando entre mostrar o ocultar el bloque.

    const toggleElenco = () => {
        elenco.current.style.display = elenco.current.style.display === "none" ? "flex":"none";
    }

    return (
        <>
        <button onClick={toggleElenco} className="button">Elenco</button>

        <div className="interprete-container" ref={elenco} style={{display : "none"}}>
            {peliculas.peliculas.map((v,i) => (
                <div key={i} className="interprete-first">

                    {v.elencoPelicula.map((v, j) => (
                        <div key={j}>
                            <img src={v.foto} className="foto"></img>
                            <div className="info">
                                <div className="nombre"><h1>{v.nombre}</h1></div>
                                <div><p>{v.bibliografia}</p></div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
        </>
    )
}

export default Interprete; 