import React, {useState} from "react";

const Contador = () => {
    //Estado que almacena el valor actual del contador
    const [numeroActual, setNumero] = useState(0);

    const incrementarNumero = () => {
        if (numeroActual < 10) setNumero(numeroActual + 1);
    };

    const decrementarNumero = () => {
        if (numeroActual > 0) setNumero(numeroActual - 1);
    };

 
    return (
        <>
        <div className="contador">
            <h2>Contador con Límites</h2>
            <p>Valor actual : <strong>{numeroActual}</strong></p>
            <div className="botones">
                <button onClick={decrementarNumero} disabled={numeroActual === 0}> Decrementar</button>
                <button onClick={incrementarNumero} disabled={numeroActual === 10}> Incrementar</button>
            </div>
        </div>
        </>
    );

};

export default Contador;