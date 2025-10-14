"use strict";


const accederBody = () =>{
    const cuerpo = document.body;
    const censurarCuerpo = cuerpo.innerHTML.replaceAll(
        "sexo",
        '<span class="bloqueado">-Contenido bloqueado-</span>'
    );
    cuerpo.innerHTML = censurarCuerpo;
};

export default accederBody;