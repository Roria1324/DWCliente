import React, { useContext, useEffect, useRef, useState } from "react"
import TablaDiscos from "../components/discos/TablaDiscos.jsx"
import Titulo from "../components/layout/Titulo.jsx"
import { ContextoDiscos } from "../context/ProveedorDiscos.jsx"
import "./ListarDisco.css"

const ListarDisco = () => {
    const { discos, filtrarDiscos } = useContext(ContextoDiscos)
    const [discosFiltrados, setDiscosFiltrados] = useState([])

    useEffect(() => {
        setDiscosFiltrados(discos)
    }, [discos])

    const busqueda = useRef(null)

    const gestionEventos = (evento) => {
        if (evento.target.id === "buscarBtn") {
            const valorBusqueda = busqueda.current.value
            if (valorBusqueda) {
                const filtro = filtrarDiscos(busqueda, discos)
                setDiscosFiltrados(filtro)
            }
        }

        if (evento.target.id === "limpiarBtn") {
            busqueda.current.value = ""
            setDiscosFiltrados(discos)
        }

        if (evento.target.id === "borrarBtn") {
            const id = Number.parseInt(evento.target.className)
            if (confirm("¿Seguro que quieres borrar el disco seleccionado?")) {
                const actualizacion = discos.filter((disco) => disco.id !== id)
                setDiscosFiltrados(actualizacion)
                localStorage.setItem("discos", JSON.stringify(actualizacion, null, 2))

                // TODO: POner aquí logica del PUT/PATCH
            }
        }
    }

    return (
        <div className="listarDiscos" onClick={gestionEventos}>
            <Titulo>Listado de Discos</Titulo>

            <div id="busquedaDiscos">
                <label htmlFor="Busqueda">Filtrar</label>
                <input type="text" ref={busqueda} id="busqueda" name="busqueda" />
                <button id="buscarBtn">Buscar</button>
                <button id="limpiarBtn">Limpiar</button>
            </div>
            <TablaDiscos discos={discosFiltrados} />
        </div>
    )
}

export default ListarDisco
