import React, {useState} from "react";

const Listado = () => {

    //Estado que guarda los números generados (array)
    const [numeros, setnumero] = useState([]);

    const generarNumero =() => {

        if(numeros.length === 100) return;

        let nuevo;
        do{
        nuevo = Math.floor(Math.random() * 100 + 1)
        }while (numeros.includes(nuevo));

        setnumero([...numeros, nuevo]);
    };

    const eliminar = () => {
        setnumero([]);
    };

    return (
        <>
        <div className="contenedor">
            <h2>Listado Números</h2>
            <p>
                <ul>
                    {numeros.map((v, i) => (
                        <li key={i}>{v}</li>
                    ))}
                </ul>
            </p>
            <div className="botones">
                <button onClick={generarNumero}>Generar</button>
                <button onClick={eliminar}>Eliminar</button>
            </div>
        </div>
        </>
    );
};

export default Listado;