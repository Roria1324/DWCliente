"use strict";
import React, { useEffect, useState } from 'react'
import "./VerDiscos.css"


const VerDiscos = () => {

  const [listadoDiscos, setListadoDiscos] = useState([]);

  useEffect(() => { 
    const datos = JSON.parse(localStorage.getItem("discos")) || []
    setListadoDiscos(datos)
  }, [])

  const borrarDisco = (idDiscos) => {
    if (confirm("¿Desea borrar el disco?")){
      const nuevaLista = listadoDiscos.filter( d =>  d.id !== idDiscos)
      setListadoDiscos(nuevaLista)
      localStorage.setItem("discos",JSON.stringify(nuevaLista));
    }
  }
  return (
    <div className='contenedorDiscos'>
      <h2>Listado Discos</h2>
      {listadoDiscos.length === 0 && <p>No hay discos guardados</p>}
    <table className='discoVer'>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Caratula</th>
          <th>Grupo</th>
          <th>Año</th>
          <th>Código</th>
          <th>Prestado</th>
          <th></th>
      </tr>
      </thead>

      <tbody>
          {listadoDiscos.map((disco) => (
            <tr key={disco.id}>
                <td>{disco.nombreDisco}</td>
                <td> <img src={disco.caratulaDisco} className='imagenCaratula'/> </td>
                <td>{disco.nombreGrupo}</td>
                <td>{disco.yearPublication}</td>
                <td>{disco.localizacionCodigo}</td>
                <td>{disco.prestado} </td>
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