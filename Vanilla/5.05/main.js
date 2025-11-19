"use strict";

import validarFormulario from "./biblioteca/validarFormulario.js";
import {borrarDisco, limpiarFormulario,  pintarDiscos }  from "./biblioteca/funciones.js";


window.onload = () => {

    const formulario = document.getElementById("formulario");
    const contenedorDiscos = document.getElementById("discos");

    let discos = JSON.parse(localStorage.getItem("discos")) || [];
    
    //If antes de iniciar los eventos para asegurarnos que el buscador del usuario tenga localStorage.
    if (typeof Storage !== "undefined"){
        //Eventos necesarios para poder guardar discos, mostrar los discos, buscar discos, limpiar la búsqueda y borrar discos.
        document.getElementById("guardar").addEventListener("click", () => {
        
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
            
        });

        document.getElementById("mostrar").addEventListener("click", () => {
            contenedorDiscos.innerHTML = pintarDiscos(discos);
        });

        document.getElementById("btnBuscar").addEventListener("click", () => {
            let texto = document.getElementById("buscarDiscos").value.trim();
            let listaFiltrada = discos.filter((disco) => disco.nombreDisco.toLowerCase().includes(texto.toLowerCase()))
            contenedorDiscos.innerHTML = pintarDiscos(listaFiltrada);
        });

        document.getElementById("limpiarFiltros").addEventListener("click", () => {
            document.getElementById("buscarDiscos").value = "";
            contenedorDiscos.innerHTML = pintarDiscos(discos);
        });
 
        contenedorDiscos.addEventListener("click", (e) => {
            if (e.target.classList.contains("borrar")){
                if(confirm(`¿Desea eliminar el disco?`)){
                    discos = borrarDisco(discos, e.target.id);
                    localStorage.setItem("discos",JSON.stringify(discos));
                    contenedorDiscos.innerHTML = pintarDiscos(discos);
                }
            }
        });
    }
}