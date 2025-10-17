"use strict";


const esPrimo = (number) => {
    if (number <=1) return false;
    if (number === 2) return true;
    if (number % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(number); i+=2){
        if (number % i === 0) return false;
    }
    return true;
}

const crearTabla = () => {
    const cuerpo = document.body
    const tabla = document.createElement("table")

    let contador = 0;
    for (let i = 0; i < 10; i++) {
        const filas =  document.createElement("tr");
        for (let i = 0; i < 10; i++) {
            const columnas = document.createElement("td");
            filas.appendChild(columnas);
            columnas.innerHTML = ++contador;
        }
        tabla.appendChild(filas);
    }
    cuerpo.appendChild(tabla);
}

const colorNumero = () => {
    const celdas = document.querySelectorAll("td");
    celdas.forEach(celdas => {
        const contador = parseInt(celdas.textContent, 10);
        if(esPrimo(contador)){
            celdas.classList.add("primo")
        }
    });
}



export {crearTabla, colorNumero};