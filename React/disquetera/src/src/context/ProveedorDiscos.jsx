import React, { createContext, useState, useEffect } from "react"
import useAPI from "../hooks/useAPI.js"

const ContextoDiscos = createContext()

const ProveedorDiscos = ({ children }) => {
    const [discos, setDiscos] = useState([])
    const { obtener, guardar, editarPUT, editarPATCH, eliminar } = useAPI()

    const filtrarDiscos = (busquedaRef, discos) => {
        let valorBusqueda = busquedaRef.current.value
        let discosFiltrados = []
        if (valorBusqueda) {
            discosFiltrados = discos.filter((disco) => {
                for (let clave in disco) {
                    let valor = disco[clave]
                    if (typeof valor === "number" || typeof valor === "boolean") {
                        valor = valor.toString()
                    }
                    if (valor.toLowerCase().includes(valorBusqueda.toLowerCase())) return true
                }
                return false
            })
        }
        return discosFiltrados
    }

    const ENDPOINT = "http://localhost:3000/discos"

    const obtenerDiscos = async () => {
        try {
            const datos = await obtener(ENDPOINT)
            setDiscos(datos)
        } catch (error) {
            throw error
        }
    }

    const guardarDisco = async (datos) => {
        try {
            const respuesta = await guardar(ENDPOINT, datos)
            setDiscos([...discos, datos])
        } catch (error) {
            console.log(error)
        }
    }

    const caja = { discos, filtrarDiscos, obtenerDiscos, guardarDisco }

    useEffect(() => {
        obtenerDiscos()
    }, [])

    return <ContextoDiscos value={caja}>{children}</ContextoDiscos>
}

export default ProveedorDiscos
export { ContextoDiscos }
