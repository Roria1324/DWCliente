"use strict";
import React, { use, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./VerDiscos.css"


const VerDiscos = () => {
  //Estados usados para poder ver los discos, borrar discos o buscarlos.
  const [listadoDiscos, setListadoDiscos] = useState([]);
  const [listadoOriginal, setListadoOriginal] = useState([])
  const [texto, setTexto] = useState("")
  
  //Usado para cargar una vez todos los discos que hay almacenados y no sobrecargar de renders la página.
  useEffect(() => { 
    const datos = JSON.parse(localStorage.getItem("discos")) || []
    setListadoDiscos(datos)
    setListadoOriginal(datos)
  }, [])

  //Funciones buscar y borrar de la práctica anterior adaptada a react.
  const buscar = (e) => {
    const valor = e.target.value
    setTexto(valor)
    
    let listaFiltrada = listadoOriginal.filter((disco) => disco.nombreDisco.toLowerCase().includes(valor.toLowerCase()))
    setListadoDiscos(listaFiltrada)
  }
  
  const borrarDisco = (idDiscos) => {
    if (confirm("¿Desea borrar el disco?")){
      const nuevaLista = listadoOriginal.filter( d =>  d.id !== idDiscos)
      setListadoOriginal(nuevaLista)
      setListadoDiscos(nuevaLista)
      
      localStorage.setItem("discos",JSON.stringify(nuevaLista));
    }
  }
  return (
    <div className='contenedorDiscos'>
      <input type="search" placeholder='Buscar disco...' name="buscarDisco" id="buscarDisco" value={texto} onChange={buscar}/>
      <h2>Listado Discos</h2>
      {listadoDiscos.length === 0 && <p>No hay discos guardados</p>}
    <table className='discoVer'>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Caratula</th>
          <th>Grupo</th>
          <th>Genero</th>
          <th></th>
      </tr>
      </thead>

      <tbody>
          {listadoDiscos.map((disco) => (
            <tr key={disco.id}>
                <td>{disco.nombreDisco}</td>
                <td><Link to={`/verInfo/${disco.id}`}> <img src={disco.caratulaDisco} className='imagenCaratula'/></Link></td>
                <td>{disco.nombreGrupo}</td>
                <td>{disco.genero}</td>
                <td><input type="button" id={disco.id} value="Borrar" onClick={(e) => {
                  borrarDisco(e.target.id)
                }}/></td>
            </tr>
          ))}
      </tbody>
    </table>
    </div>
  )
}

export default VerDiscos