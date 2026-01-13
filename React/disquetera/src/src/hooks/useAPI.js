import React, { useState } from "react"

const useAPI = () => {
    const [cargando, setCargando] = useState(false)
    const [error, setError] = useState(null)

    const solicitud = async (url, opciones = {}) => {
        setCargando(true)
        setError(null)
        try {
            const respuesta = await fetch(url, {
                headers: {
                    "Content-Type": "application/json",
                },
                ...opciones,
            })

            if (!respuesta.ok) {
                throw new Error(
                    `Error en la solicitud ${respuesta.status}: ${respuesta.statusText}`
                )
            }

            const datos = await respuesta.json()

            return datos
        } catch (error) {
            setError(error.message || "Friki, ha surgido un fallo, ¿donde? ª.")
            throw error
        } finally {
            setCargando(false)
        }
    }

    // Función GET
    const obtener = (url) => solicitud(url)

    // Función POST
    const guardar = async (url, body) => {
        const a = await solicitud(url, {
            method: "POST",
            body: JSON.stringify(body),
        })
        console.log("b " + JSON.stringify(a))
        return a
    }

    // Función PUT
    const editarPUT = (url, body) =>
        solicitud(url, {
            method: "PUT",
            body: JSON.stringify(body),
        })

    // Función PATCH
    const editarPATCH = (url, body) =>
        solicitud(url, {
            method: "PATCH",
            body: JSON.stringify(body),
        })

    // Función DELETE
    const eliminar = (url) =>
        solicitud(url, {
            method: "DELETE",
        })

    return {
        cargando,
        error,
        obtener,
        guardar,
        editarPUT,
        editarPATCH,
        eliminar,
    }
}

export default useAPI
