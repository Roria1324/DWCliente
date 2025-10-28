import React, {useRef} from "react";
import "./Taquilla.css"
import { useParams } from "react-router-dom";
import peliculas from "../../Data/ElencoPelicula.json"

 
const Taquilla = () => {

    const taquilla = useRef(null);
    const {id} = useParams()
    const pelicula = peliculas.peliculas.find((p) => p.id === parseInt(id))


    //Función que cambia dinámicamente el estilo display del elemento, alternando entre mostrar o ocultar el bloque.
    const toggleTaquilla = () => {
        taquilla.current.style.display = taquilla.current.style.display === "none" ? "flex":"none";
    }

    return (
        <>
            <button onClick={toggleTaquilla} className="button">Taquilla</button>
            <div className="taquilla" ref={taquilla} style={{display : "none"}}>
                <p className="precio">{pelicula.taquilla}</p>  
            </div>
        </>
    );
}

export default Taquilla;