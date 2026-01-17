"use strict"
import React, { createContext, useEffect, useState } from 'react'
import useAPI from '../hooks/useApi.js';

  const ContextoDiscos = createContext();

const ProveedorDiscos = ({children}) => {

  const url = "http://localhost:3000/discos";

  const [discos, setDiscos] = useState([]);

  const {cargar, error, get, post, editPUT, editPATCH, borrar} = useAPI();

  const obtenerTodos = async () => {
    try{
      setDiscos(await get(url));
    } catch (error) {
      throw error
    }
  }

  const guardar = async (body) => {
    try {
        await post(`${url}`, body)
    } catch (error) {
      throw error
    }
  }

  const borrarPorID = async (id) => {
    try {
      await borrar(`${url}/${id}`)
    } catch (error) {
      throw error
    }
  }

  const editarPorId = async (id, body) => {
    try {
      const respuesta = await editPUT(`${url}/${id}`, body)
      obtenerTodos()
    } catch (error) {
      throw error
    }
  }

  const reemplazarPorId = async (id, body) => {
    try {
      const respuesta = await editPATCH(`${url}/${id}`, body)
      obtenerTodos()
    } catch (error) {
      throw error
    }
  }



  const elementosAPI = {
    discos,
    obtenerTodos,
    guardar,
    borrarPorID,
    editarPorId,
    reemplazarPorId,
    cargar,
    error
  };

  useEffect(() => {
    obtenerTodos()
  }, []); 

  return (
    <ContextoDiscos value={elementosAPI}>{children}</ContextoDiscos>
  )
}

export default ProveedorDiscos;
export {ContextoDiscos};