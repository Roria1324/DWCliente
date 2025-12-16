"use strict"

import getData  from "./getData.js";
import pintarAnimes from "./pintarData.js";

const cargaWeb  = async () => {
    const animes = await getData();
    document.getElementById("ani").innerHTML = pintarAnimes(animes);
}

export default cargaWeb;