import React, {useRef} from "react";
import "./Taquilla.css"
 
const Taquilla = (props) => {

    const taquilla = useRef(null);


    //Función que cambia dinámicamente el estilo display del elemento, alternando entre mostrar o ocultar el bloque.
    const toggleTaquilla = () => {
        taquilla.current.style.display = taquilla.current.style.display === "none" ? "flex":"none";
    }

    return (
        <>
            <button onClick={toggleTaquilla} className="button">Taquilla</button>
            <div className="taquilla" ref={taquilla} style={{display : "none"}}>
                <p className="precio">{props.children}</p>
            </div>
        </>
    );
}

export default Taquilla;