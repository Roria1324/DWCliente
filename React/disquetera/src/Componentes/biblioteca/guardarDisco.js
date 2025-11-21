"use strict"
import validarFormulario from "./validarFormulario.js"

const guardarDisco = () => {
    let discos = JSON.parse(localStorage.getItem("discos")) || [];
        
    //If antes de iniciar los eventos para asegurarnos que el buscador del usuario tenga localStorage.
    if (typeof Storage !== "undefined"){
    //Eventos necesarios para poder guardar discos, mostrar los discos, buscar discos, limpiar la búsqueda y borrar discos.

        if(!validarFormulario()){
            return;
        }
            const newDisco = {
                id : crypto.randomUUID(),
                nombreDisco : document.getElementById("nombreDisco").value.trim(),
                caratulaDisco :  document.getElementById("caratulaDisco").value.trim() || "Sin caratula",
                nombreGrupo :  document.getElementById("nombreGrupo").value.trim(),
                yearPublication :  document.getElementById("yearPublication").value.trim() || "Sin año",
                genero :  document.getElementById("genero").value,
                localizacion :  document.getElementById("localizacionCodigo").value.trim(),
                prestado :  document.getElementById("prestado").checked,
            };

            discos = [...discos, newDisco];
            localStorage.setItem("discos", JSON.stringify(discos));
            limpiarFormulario(formulario);
        
    }
}

export default guardarDisco;