"use strict";

const crearTabla = () => {
    const cuerpo = document.body
    const tabla = document.createElement("table")




    for (let i = 0; i < 10; i++) {
        const filas =  document.createElement("tr");
        for (let i = 0; i < 10; i++) {
            const columnas = document.createElement("td");
            filas.appendChild(columnas);
        }
        columnas.appendChild(filas)
    }
    cuerpo.appendChild(tabla)
}

export default crearTabla;