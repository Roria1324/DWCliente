"use strict"

import getData from "./getData.js"
import pintarDatos from "./pintarDatos.js";

const cargarWeb = async () => {
    const animes = await getData();
    return animes
}

export default cargarWeb;