"use strict"

import React from 'react'
import "./Formulario.css"

const Formulario = () => {

  return (
    <div>        
        <div id="mensajeError"></div>
        <form id="formulario" name="formulario">
            
            <div className="nombre">
                <label htmlFor="nombreDisco"><h3>Nombre Disco</h3></label>
                <input type="text" name="nombreDisco" id="nombreDisco" placeholder="Diggy Diggy Hole" required />
            </div>

            <div className="imagenDisco">
                <label htmlFor="caratulaDisco"><h3>Caratula del Disco</h3></label>
                <input type="url" name="caratula" id="caratulaDisco" placeholder="Introduzca url de la caratula" />
            </div>

            <div className="grupo">
                <label htmlFor="nombreGrupo"><h3>Grupo de Música</h3></label>
                <input type="text" name="nombreGrupo" id="nombreGrupo" placeholder="Wind Rose" />
            </div>

            <div className="yearPb">
                <label htmlFor="yearPublication"><h3>Año de Publicación</h3></label>
                <input type="number" name="yearPublication" id="yearPublication" placeholder="2019" />
            </div>

            <div className="generoOpcion">
                <label htmlFor="genero"><h3>Género de Música</h3></label>
                <select name="genero" id="genero">
                    <option value="">Selecciona una opción</option>
                    <option value="folk_metal">Folk Metal</option>
                    <option value="hardstyle">Hardstyle</option>
                    <option value="pop">Pop</option>
                    <option value="rap">Rap</option>
                </select>
            </div>

            <div className="localizacion">
                <label htmlFor="localizacionCodigo"><h3>Localización</h3></label> 
                <input type="text" name="localizacionCodigo" id="localizacionCodigo" />
            </div>
            
            <div className="prestado">
                <label><h3>Prestado</h3></label>

                <input type="radio" name="prestado" id="prestado1" value="true" />
                <label htmlFor="prestado1">Sí</label>

                <input type="radio" name="prestado" id="prestado2" value="false" />
                <label htmlFor="prestado2">No</label>
            </div>

            <div className="botones"><br />
                <button id="guardar" type="button">Guardar</button>
            </div>

        </form>
    </div>
  )
}

export default Formulario;