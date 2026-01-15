import React, { useContext } from "react"
import { useState } from "react"
import { validarFormulario, resultadoValidaciones } from "../../lib/validaciones.js"
import { generarMensajes } from "../../lib/errores.js"
import useAPI from "../../hooks/useAPI.js"
import "./FormularioDiscos.css"
import { ContextoDiscos } from "../../context/ProveedorDiscos.jsx"

const FormularioDiscos = (props) => {
    const valoresIniciales = {
        nombre: "",
        imgUrl: "",
        artista: "",
        anyoPublicacion: "",
        genero: "vacio",
        localizador: "",
        prestado: false,
    }

    const [disco, setDisco] = useState(valoresIniciales)
    const { notificaciones, setNotificaciones } = props
    const { ENDPOINT, guardarDisco } = useContext(ContextoDiscos)

    const actualizarDato = (evento) => {
        const { name, value, checked } = evento.target
        setDisco({ ...disco, [name]: evento.target.type === "checkbox" ? !checked : value })
    }

    const resetFormulario = () => {
        setDisco(valoresIniciales)
    }

    // Función que "pule" los datos del formulario antes de validarlos
    // por si hay algo que no debería de estar ahi
    const prepararDatos = (disco = {}) => {
        return {
            id: crypto.randomUUID(),
            nombre: disco.nombre?.trim() || "",
            imgUrl: disco.imgUrl?.trim() || "",
            artista: disco.artista?.trim() || "",
            anyoPublicacion: disco.anyoPublicacion || "Desconocido",
            genero: disco.genero.trim() === "vacio" ? "Sin género" : disco.genero,
            localizador: disco.localizador?.trim() || "",
            prestado: disco.prestado || false,
        }
    }

    // En caso de que todas las validaciones sean correctas
    // se añade el mensaje de "Disco guardado con éxito"
    const generarNotificaciones = (valido) => {
        let mensajes = {}
        if (valido === true) {
            mensajes = { mensaje: "Disco guardado con éxito" }
        } else {
            mensajes = generarMensajes(resultadoValidaciones(disco))
        }
        setNotificaciones(mensajes)
        // Si notificaciones contiene otra clave que no sea "mensaje", es porque
        // dicha validación a fallado por lo que su campo relacionado se
        // erróneo por lo que se resaltará (Lógica implementada en la clase de
        // los inputs)
    }

    const manejarSubmit = () => {
        const datos = prepararDatos(disco)
        const valido = validarFormulario(datos)
        if (valido === true) {
            guardarDisco(datos)
            resetFormulario()
        }
        generarNotificaciones(valido)
    }

    return (
        <div className="formularioDiscos">
            <h2>Insertar Nuevo Disco</h2>
            <form name="formDiscos" onSubmit={(evento) => evento.preventDefault()}>
                <label htmlFor="nombre">Nombre del disco</label>
                <input
                    className={notificaciones?.nombre ? "inputError" : ""}
                    type="text"
                    id="nombre"
                    name="nombre"
                    placeholder="Antonio Recio"
                    value={disco.nombre}
                    onChange={(evento) => actualizarDato(evento)}
                />

                <label htmlFor="imgUrl">URL de la imagen del disco</label>
                <input
                    type="url"
                    id="imgUrl"
                    name="imgUrl"
                    placeholder="http://localhost"
                    value={disco.imgUrl}
                    onChange={(evento) => actualizarDato(evento)}
                />

                <label htmlFor="artista">Artista / Grupo</label>
                <input
                    className={notificaciones?.artista ? "inputError" : ""}
                    type="text"
                    id="artista"
                    name="artista"
                    placeholder="Los Morancos"
                    value={disco.artista}
                    onChange={(evento) => actualizarDato(evento)}
                />

                <label htmlFor="anyoPublicacion">Año de publicación</label>
                <input
                    className={notificaciones?.anyoPublicacion ? "inputError" : ""}
                    type="number"
                    id="anyoPublicacion"
                    name="anyoPublicacion"
                    placeholder="2020"
                    value={disco.anyoPublicacion}
                    onChange={(evento) => actualizarDato(evento)}
                />

                <label htmlFor="genero">Género del disco</label>
                <select
                    className={notificaciones?.genero ? "inputError" : ""}
                    id="genero"
                    name="genero"
                    value={disco.genero}
                    onChange={(evento) => actualizarDato(evento)}
                >
                    <option value="clasica">Clásica</option>
                    <option value="electronica">Electrónica</option>
                    <option value="hiphop">Hip-hop</option>
                    <option value="jazz">Jazz</option>
                    <option value="pop">Pop</option>
                    <option value="rap">Rap</option>
                    <option value="reggaeton">Reggaetón</option>
                    <option value="rock">Rock</option>
                    <option value="urbano">Urbano</option>
                    <option value="otro">Otro</option>
                    <option value="vacio" disabled>
                        Vacio
                    </option>
                </select>

                <label htmlFor="localizador">Localizador del disco</label>
                <input
                    className={notificaciones?.localizador ? "inputError" : ""}
                    type="text"
                    id="localizador"
                    name="localizador"
                    placeholder="ES-001AA"
                    value={disco.localizador}
                    onChange={(evento) => actualizarDato(evento)}
                />

                <label className="labelCheckbox">
                    ¿El disco es prestado?
                    <input
                        type="checkbox"
                        name="prestado"
                        value={disco.prestado}
                        onChange={(evento) => actualizarDato(evento)}
                    />
                </label>

                <button
                    id="guardarDiscoBtn"
                    onClick={() => {
                        manejarSubmit()
                    }}
                >
                    Guardar disco
                </button>
            </form>
        </div>
    )
}

export default FormularioDiscos
