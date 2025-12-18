"use strict";

const pintarDatos = (animes) => {
    let plantilla = ""

    Array.isArray(animes) && animes.length ? 
    animes.map((ani) => {
        plantilla += 
        `
        <ul class="listado">
            <li>
                ${ani.title}
                ${ani.episodes}
            </li>
        </ul>
        `
    }) : plantilla = "No hay nada";

    return plantilla;
}

export default pintarDatos;