"use strict"

const crearTabla = (celdas) => {
    const cuerpo = document.body
    const contenedor = document.createElement("div")
    const tabla = document.createElement("table")

    for (let i = 1; i <= celdas; i++) {
        const filas =  document.createElement("tr");
        for (let j = 1; j <= celdas; j++) {
            const columnas = document.createElement("td");
            filas.appendChild(columnas);
        }
        tabla.appendChild(filas);
    }
    contenedor.appendChild(tabla);
    cuerpo.appendChild(contenedor);
    tabla.classList.add("table")
}

export default crearTabla;