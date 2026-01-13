import React, { useContext } from "react"
import { useLocation, Link, useParams } from "react-router-dom"
import Titulo from "../components/layout/Titulo.jsx"
import { capitalizar } from "../lib/utilidades.js"
import "./DetallesDisco.css"
import { ContextoDiscos } from "../context/ProveedorDiscos.jsx"

const DetallesDisco = () => {
    const { discos } = useContext(ContextoDiscos)
    const { id } = useParams()
    // Mediante Link de TablaDiscos.jsx envío el objeto "disco" entero en lugar de tener
    // que volver de volver a obtener todos los discos y filtrar por el id
    // const { state: disco } = useLocation()

    const buscarDisco = (id) => {
        return discos.find((disco) => disco.id === id) || {}
    }

    const disco = buscarDisco(id)

    return (
        <div className="detallesDisco">
            {!disco || Object.keys(disco).length === 0 ? (
                <Titulo>No hay ningún disco con ID {id}, feo</Titulo>
            ) : (
                <div className="detallesDisco-main">
                    <div className="detallesDisco-cover">
                        <img
                            className="detallesDisco-img"
                            src={disco.imgUrl}
                            alt={`Cover de ${disco.nombre}`}
                            onError={(e) => {
                                e.currentTarget.onerror = null
                                e.currentTarget.src =
                                    "https://img.freepik.com/vector-premium/vector-icono-imagen-predeterminado-pagina-imagen-faltante-diseno-sitio-web-o-aplicacion-movil-no-hay-foto-disponible_87543-11093.jpg"
                            }}
                        />
                        <div className="detallesDisco-btnVolver">
                            <Link to={"/listar-disco"}>Volver</Link>
                        </div>
                    </div>

                    <div className="detallesDisco-info">
                        <h1 className="detallesDisco-titulo">{capitalizar(disco.nombre)}</h1>

                        <div className="detallesDisco-datos">
                            <h2>
                                Artista: <span>{capitalizar(disco.artista)}</span>
                            </h2>
                            <h2>
                                Género: <span>{capitalizar(disco.genero)}</span>
                            </h2>
                            <h2>
                                Año: <span>{disco.anyoPublicacion}</span>
                            </h2>
                            <h2>
                                Localizador: <span>{disco.localizador}</span>
                            </h2>
                            <h2>
                                Prestado: <span>{disco.prestado ? "Sí" : "No"}</span>
                            </h2>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default DetallesDisco
