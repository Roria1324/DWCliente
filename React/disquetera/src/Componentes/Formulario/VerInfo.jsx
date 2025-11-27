"use strict"
import React, { useEffect, useState } from 'react'
import "./VerInfo.css"
import { useParams } from 'react-router-dom'

const VerInfo = () => {
//Componente para ver el disco que el usuario haya seleccionado.
  const [listadoDiscos, setListadoDiscos] = useState([])
  const {id} = useParams()

  useEffect(() => {
    const datos = JSON.parse(localStorage.getItem("discos")) || []
    const resultado = datos.find(d => d.id === id)
    setListadoDiscos(resultado)
  }, [id])
  
  return (
    
    <div className='contenedor-principal'>
        <img src={listadoDiscos.caratulaDisco}/>
        <div>
          <p>Nombre de disco: {listadoDiscos.nombreDisco}</p>
          <p>Nombre de grupo: {listadoDiscos.nombreGrupo}</p>
          <p>Año de publicación: {listadoDiscos.yearPublication}</p>
          <p>Género: {listadoDiscos.genero}</p>
          <p>Código localización: {listadoDiscos.localizacionCodigo}</p>
          <p>Prestado: {listadoDiscos.prestado === "true" ? "Sí" : "No"}</p>
        </div>
    </div>
  )
}

export default VerInfo