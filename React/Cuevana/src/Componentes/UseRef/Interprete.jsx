import React, {useRef} from "react";
import "./Interprete.css"
const Interprete = ({elenco = []}) => {
    const elencoRef = useRef(null);

        //Función que cambia dinámicamente el estilo display del elemento, alternando entre mostrar o ocultar el bloque.

    const toggleElenco = () => {
        elencoRef.current.style.display = elencoRef.current.style.display === "none" ? "flex":"none";
    }

    
    
    return (
        <>
        <button onClick={toggleElenco} className="button">Elenco</button>

        <div className="interprete-container" ref={elencoRef} style={{display : "none"}}>
            {elenco.map((v, i) => (
                <div key={i} className="interprete-first">
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
        </>
    )
}

export default Interprete; 