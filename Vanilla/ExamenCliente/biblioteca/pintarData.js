"use strict";

const pintarAnimes = (animes) => {
    let plantilla = "";
    Array.isArray(animes) && animes.length ?
    animes.map((an) => {
        plantilla += `
        <ul class="listado">
            <li id=${an.mal_id}>
                ${an.title}
                ${an.mal_id}
                <img src="${an.images.jpg.image_url}" />
            </li>
        </ul>
        `
    }) : "No hay nada";
    return plantilla;
}

export default pintarAnimes;