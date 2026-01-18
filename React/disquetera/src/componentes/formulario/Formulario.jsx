"use strict"

import React, { useContext, useState } from 'react'
import "./Formulario.css"
import validarFormulario from "../../biblioteca/validarFormulario.js"
import { useParams, useNavigate } from 'react-router-dom'
import useDiscos from '../../hooks/useDiscos.js'

const Formulario = () => {

    const discoDefault = {
        id : "",
        nombreDisco : "",
        caratulaDisco: "",
        nombreGrupo : "",
        yearPublication: "",
        genero : "",
        localizacionCodigo : "",
        prestado :""
    }

    const {id} = useParams()
    const [disco, setDisco] = useState(discoDefault)
    const {guardar, obtenerPorId, editarPorId} = useDiscos()
    const navigate = useNavigate()

    const [error, setError] = useState({})

    const reiniciarFormulario = () => {
        setDisco(discoDefault)
    }

    const actualizarInputs = (e) => {
        const {name, value, type, checked} = e.target
        setDisco(nprev => ({...nprev, [name]: type === "radio" ? value : value}))
    }
//Uso de Object.keys para el acceso a los datos de discos.
//Si hay errores se guardan y se muestran donde esté el error.
    const guardarDisco = async () => {
        const resultado = validarFormulario(disco);
        if (Object.keys(resultado).length > 0){
            setError(resultado);
            return;
        }
        try {
            if (id) {
                await editarPorId(id, disco)
                navigate("/verDiscos")
            } else {
                await guardar({...disco, id : crypto.randomUUID()})
                reiniciarFormulario()
            }
            
            setError({})
        } catch (error) {
            throw error
        }
        
    }
    
  return (
    <div>
        <div id="mensajeError"></div>
        <form id="formulario">
            
            <div className="nombre">
                <label htmlFor="nombreDisco"><h3>Nombre Disco</h3></label>
                <input type="text" name="nombreDisco" id="nombreDisco" placeholder="Diggy Diggy Hole" required value={disco.nombreDisco} onChange={actualizarInputs}/>
                {error.nombreDisco && <p className='msgError'>{error.nombreDisco}</p>}
            </div>

            <div className="imagenDisco">
                <label htmlFor="caratulaDisco"><h3>Caratula del Disco</h3></label>
                <input type="url" id="caratulaDisco" name="caratulaDisco" placeholder="Introduzca url de la caratula" value={disco.caratulaDisco} onChange={actualizarInputs}/>
                {error.caratulaDisco && <p className='msgError'>{error.caratulaDisco}</p>}
            </div>

            <div className="grupo">
                <label htmlFor="nombreGrupo"><h3>Grupo de Música</h3></label>
                <input type="text" name="nombreGrupo" id="nombreGrupo" placeholder="Wind Rose" value={disco.nombreGrupo} onChange={actualizarInputs}/>
                {error.nombreGrupo && <p className='msgError'>{error.nombreGrupom}</p>}
            </div>

            <div className="yearPb">
                <label htmlFor="yearPublication"><h3>Año de Publicación</h3></label>
                <input type="number" name="yearPublication" id="yearPublication" placeholder="2019" value={disco.yearPublication} onChange={actualizarInputs}/>
                {error.yearPublication && <p className='msgError'>{error.yearPublication}</p>}
            </div>

            <div className="generoOpcion">
                <label htmlFor="genero"><h3>Género de Música</h3></label>
                <select name="genero" id="genero" value={disco.genero} onChange={actualizarInputs}>
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
                <input type="text" name="localizacionCodigo" id="localizacionCodigo" value={disco.localizacionCodigo} onChange={actualizarInputs}/>
                {error.localizacionCodigo && <p className='msgError'>{error.localizacionCodigo}</p>}
            </div>
            
            <div className="prestado">
                <label><h3>Prestado</h3></label>

                <input type="radio" name="prestado" id="prestado1" value="true" onChange={actualizarInputs}/>
                <label htmlFor="prestado1">Sí</label>

                <input type="radio" name="prestado" id="prestado2" value="false" onChange={actualizarInputs}/>
                <label htmlFor="prestado2">No</label>
            </div>

            <div className="botones"><br />
                <button type="button" onClick={guardarDisco}>{id ? "Actualizar Datos" : "Guardar"}</button>
            </div>
        </form>
    </div>
  )
}

export default Formulario;