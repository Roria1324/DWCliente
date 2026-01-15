import React from "react"
import { Link } from "react-router-dom"
import { capitalizar } from "../../lib/utilidades.js"
import "./TablaDiscos.css"

const TablaDiscos = ({ discos }) => {
    const columnas = 5
    return (
        <div id="tablaDiscos">
            <table>
                <thead>
                    <tr>
                        <th>Imagen</th>
                        <th>Nombre</th>
                        <th>Grupo / Artista</th>
                        <th>Género</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {!discos || discos.length === 0 ? (
                        <tr>
                            <td colSpan={columnas} className="mensajeDiscos">
                                No se han encontrado discos
                            </td>
                        </tr>
                    ) : (
                        discos.map((disco) => (
                            <tr key={disco.id} id={`disco-${disco.id}`}>
                                <td className="tdImg">
                                    <img
                                        className="portada"
                                        src={disco.imgUrl}
                                        alt={`Cover de ${disco.nombre}`}
                                        onError={(e) => {
                                            e.currentTarget.onerror = null
                                            e.currentTarget.src =
                                                "https://img.freepik.com/vector-premium/vector-icono-imagen-predeterminado-pagina-imagen-faltante-diseno-sitio-web-o-aplicacion-movil-no-hay-foto-disponible_87543-11093.jpg"
                                        }}
                                    />
                                </td>
                                <td>{capitalizar(disco.nombre)}</td>
                                <td>{capitalizar(disco.artista)}</td>
                                <td>{capitalizar(disco.genero)}</td>
                                <td>
                                    <div className="detalleBtn">
                                        <Link to={`/detalles-disco/${disco.id}`}>Detalles</Link>
                                    </div>
                                    <button id="borrarBtn" className={disco.id}>
                                        Borrar
                                    </button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default TablaDiscos
