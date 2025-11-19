"use strict";

import validarFormulario from "./biblioteca/validarFormulario.js";
import {borrarDisco, limpiarFormulario,  pintarDiscos }  from "./biblioteca/funciones.js";


window.onload = () => {

    const formulario = document.getElementById("formulario");

    let discos = JSON.parse(localStorage.getItem("discos")) || [];
    
    if (typeof Storage !== "undefined"){
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
            document.getElementById("discos").innerHTML = pintarDiscos(discos);
        })

        document.getElementById("btnBuscar").addEventListener("click", () => {
            let texto = document.getElementById("buscarDiscos").value.trim();
            let listaFiltrada = discos.filter((disco) => disco.nombreDisco.toLowerCase().includes(texto.toLowerCase()))
            document.getElementById("discos").innerHTML = pintarDiscos(listaFiltrada);
        })

        document.getElementById("limpiarFiltros").addEventListener("click", () => {
            document.getElementById("buscarDiscos").value = ""
            document.getElementById("discos").innerHTML = pintarDiscos(discos);
        })

        document.getElementById("discos").addEventListener("click", (e) => {
            if (e.target.classList.contains("borrar")){
                if(confirm(`¿Desea eliminar el disco?`)){
                discos = borrarDisco(discos, e.target.id)
                localStorage.setItem("discos",JSON.stringify(discos))
                document.getElementById("discos").innerHTML = pintarDiscos(discos);
                }
            }
        })
    }
}