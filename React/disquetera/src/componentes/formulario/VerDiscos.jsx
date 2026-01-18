"use strict";
import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom';
import useDiscos from "../../hooks/useDiscos.js"
import "./VerDiscos.css"

//Si se hace click sobre la imagen se ve la info detallada del disco quería mantener esa interacción.
const VerDiscos = () => {
  //Estados usados para poder ver los discos, borrar discos o buscarlos.
  const {discos, obtenerTodos, borrarPorID} = useDiscos();
  const [listadoFiltrado, setListadoFiltrado] = useState([])
  const [texto, setTexto] = useState("")
  
  //Usado para cargar una vez todos los discos que hay almacenados y no sobrecargar de renders la página.
  useEffect(() => { 
    obtenerTodos()
  }, [])

  useEffect(() => {
    const filtrados = discos.filter(d => 
      d.nombreDisco.toLowerCase().includes(texto.toLowerCase())
    )
    setListadoFiltrado(filtrados)
  }, [texto, discos])

 //Funciones buscar y borrar de la práctica anterior adaptada a react.
  const buscar = (e) => {
    setTexto(e.target.value)
  }

  const borrarDisco = async (idDiscos) => {
    if (confirm("¿Desea borrar el disco?")){
      await borrarPorID(idDiscos)
    }
  }
  return (
    <div className='contenedorDiscos'>
      <input type="search" placeholder='Buscar disco...' name="buscarDisco" id="buscarDisco" value={texto} onChange={buscar}/>

      <h2>Listado Discos</h2>
      {listadoFiltrado.length === 0 && <p>No hay discos guardados</p>}

      <table className='discoVer'>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Caratula</th>
            <th>Grupo</th>
            <th>Genero</th>
            <th>Acciones</th>
        </tr>
        </thead>

        <tbody>
            {listadoFiltrado.map((disco) => (
              <tr key={disco.id}>
                  <td>{disco.nombreDisco}</td>
                  <td><Link to={`/verInfo/${disco.id}`}> <img src={disco.caratulaDisco} className='imagenCaratula'/></Link></td>
                  <td>{disco.nombreGrupo}</td>
                  <td>{disco.genero.toUpperCase()}</td>
                  <td>
                      <button onClick={() => borrarDisco(disco.id)}>Borrar</button>
                      <Link to={`/editarDisco/${disco.id}`}><button>Editar</button></Link>
                  </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default VerDiscos