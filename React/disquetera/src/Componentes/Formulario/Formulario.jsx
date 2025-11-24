"use strict"

import React, { useState } from 'react'
import "./Formulario.css"
import validarFormulario from '../biblioteca/validarFormulario.js'

const Formulario = () => {

    const [disco, setDisco] = useState({
    id : "",
    nombreDisco : "",
    caratulaDisco: "",
    nombreGrupo : "",
    yearPublication: "",
    genero : "",
    localizacionCodigo : "",
    prestado :""
    })

    const [error, setError] = useState({})

    const [listadoDiscos, setListadoDiscos] = useState(
        JSON.parse(localStorage.getItem("discos")) || []
    )

    const actualizarInputs = (e) => {
        const {name, value} = e.target
        setDisco(nprev => ({...nprev, [name]: value}))
    }

    const guardar = () => {
        const resultado = validarFormulario(disco);
        if (Object.keys(resultado).length > 0){
            setError(resultado);
            return;
        }

        const nuevo = {...disco, id:crypto.randomUUID()}
        const actualizar = [...listadoDiscos, nuevo]
        setListadoDiscos(actualizar)
        localStorage.setItem("discos",JSON.stringify(actualizar))
        setDisco({
            id : "",
            nombreDisco : "",
            caratulaDisco: "",
            nombreGrupo : "",
            yearPublication: "",
            genero : "",
            localizacionCodigo : "",
            prestado :"",
        })
        setError({})
    }
    
  return (
    <div>
        <div id="mensajeError"></div>
        <form id="formulario">
            
            <div className="nombre">
                <label htmlFor="nombreDisco"><h3>Nombre Disco</h3></label>
                <input type="text" name="nombreDisco" id="nombreDisco" placeholder="Diggy Diggy Hole" required onChange={actualizarInputs} value={disco.nombreDisco}/>
                {error.nombreDisco && <p className='msgError'>{error.nombreDisco}</p>}
            </div>

            <div className="imagenDisco">
                <label htmlFor="caratulaDisco"><h3>Caratula del Disco</h3></label>
                <input type="url" id="caratulaDisco" name="caratulaDisco" placeholder="Introduzca url de la caratula" onChange={actualizarInputs} value={disco.caratulaDisco}/>
                {error.caratulaDisco && <p className='msgError'>{error.caratulaDisco}</p>}
            </div>

            <div className="grupo">
                <label htmlFor="nombreGrupo"><h3>Grupo de Música</h3></label>
                <input type="text" name="nombreGrupo" id="nombreGrupo" placeholder="Wind Rose" onChange={actualizarInputs} value={disco.nombreGrupo}/>
                {error.nombreGrupo && <p className='msgError'>{error.nombreGrupom}</p>}
            </div>

            <div className="yearPb">
                <label htmlFor="yearPublication"><h3>Año de Publicación</h3></label>
                <input type="number" name="yearPublication" id="yearPublication" placeholder="2019" onChange={actualizarInputs} value={disco.yearPublication}/>
                {error.yearPublication && <p className='msgError'>{error.yearPublication}</p>}
            </div>

            <div className="generoOpcion">
                <label htmlFor="genero"><h3>Género de Música</h3></label>
                <select name="genero" id="genero" onChange={actualizarInputs} value={disco.genero}>
                    <option value="">Selecciona una opción</option>
                    <option value="folk_metal">Folk Metal</option>
                    <option value="hardstyle">Hardstyle</option>
                    <option value="pop">Pop</option>
                    <option value="rap">Rap</option>
                </select>
                {error.genero && <p className='msgError'>{error.genero}</p>}
            </div>

            <div className="localizacion">
                <label htmlFor="localizacionCodigo"><h3>Localización</h3></label> 
                <input type="text" name="localizacionCodigo" id="localizacionCodigo" onChange={actualizarInputs} value={disco.localizacionCodigo}/>
                {error.localizacionCodigo && <p className='msgError'>{error.localizacionCodigo}</p>}
            </div>
            
            <div className="prestado">
                <label><h3>Prestado</h3></label>

                <input type="radio" name="prestado" id="prestado1" onChange={actualizarInputs} value="true" />
                <label htmlFor="prestado1">Sí</label>

                <input type="radio" name="prestado" id="prestado2" onChange={actualizarInputs} value="false" />
                <label htmlFor="prestado2">No</label>
            </div>

            <div className="botones"><br />
                <input type="button" id='guardar' value="Guardar" onClick={guardar}/>
            </div>
        </form>
    </div>
  )
}

export default Formulario;