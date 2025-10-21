import React, {useRef} from "react";
 
const Taquilla = (props) => {

    const taquilla = useRef(null);
    
    const toggleElenco = () => {
        taquilla.current.style.display = taquilla.current.style.display === "none" ? "flex":"none";
    }

    return (
        <>
            <button onClick={toggleElenco}>Taquilla</button>
            <div className="taquilla" ref={taquilla} style={{display : "none"}}>
                <p className="precio">{props.children}</p>
            </div>
        </>
    );
}

export default Taquilla;