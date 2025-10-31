"use strict"

const crearTabla = () => {
    const cuerpo = document.body
    const tabla = document.createElement("table")

    for (let i = 1; i <= 25; i++) {
        const filas =  document.createElement("tr");
        for (let j = 1; j <= 24; j++) {
            const columnas = document.createElement("td");
            filas.appendChild(columnas);

        }
        tabla.appendChild(filas);
    }
    cuerpo.appendChild(tabla);
}

export default crearTabla;