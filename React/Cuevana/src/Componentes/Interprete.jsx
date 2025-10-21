import React, {useRef} from "react";
import "./Interprete.css";
import elencoPelicula from "../data/ElencoPelicula.json"

const Interprete = () => {
    const elenco = useRef(null);

    const toggleElenco = () => {
        elenco.current.style.display = elenco.current.style.display === "none" ? "flex":"none";
    }

    return (
        <>
        <button onClick={toggleElenco}>Elenco</button>
            <div className="interprete-container" ref={elenco} style={{display : "none"}}>
                {elencoPelicula.elencoPelicula.map((v,i) => (
                        <div className="interprete-first" >
                            <img src={v.foto} className="foto"></img>
                            <div className="info">
                                <div className="nombre"><h1>{v.nombre}</h1></div>
                                <div><p>{v.bibliografia}</p></div>
                            </div>
                        </div>
                ))}
            </div>
        </>
    )
}

export default Interprete;