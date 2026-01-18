"use strict"
import React, { useContext, useEffect, useState } from 'react'
import "./VerInfo.css"
import { useParams } from 'react-router-dom'
import useDiscos from '../../hooks/useDiscos.js'

const VerInfo = () => {
//Componente para ver el disco que el usuario haya seleccionado.
  const {obtenerPorId} = useDiscos()
  const [disco, setDisco] = useState([])
  const {id} = useParams()

  useEffect(() => {
    const cargarDisco = async () => {
      const resultado = await obtenerPorId(id)
      setDisco(resultado)
    }
    cargarDisco()
  }, [id])

  return (
    
    <div className='contenedor-principal'>
        <img src={disco.caratulaDisco}/>
        <div>
          <p>Nombre de disco: {disco.nombreDisco}</p>
          <p>Nombre de grupo: {disco.nombreGrupo}</p>
          <p>Año de publicación: {disco.yearPublication}</p>
          <p>Género: {disco.genero}</p>
          <p>Código localización: {disco.localizacionCodigo}</p>
          <p>Prestado: {disco.prestado === "true" ? "Sí" : "No"}</p>
        </div>
    </div>
  )
}

export default VerInfo