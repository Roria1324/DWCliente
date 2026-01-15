import React from "react"
import { useEffect, useRef } from "react"
import Notificacion from "./Notificacion.jsx"
import "./Notificaciones.css"

const Notificaciones = ({ notificaciones }) => {
    const divNotificaciones = useRef(null)

    // Cada vez que el estado de notificaciones cambia, se muestran las notificaciones
    // pertinentes y se ocultan al tiempo
    useEffect(() => {
        divNotificaciones.current.classList.remove("oculto")
        setTimeout(() => {
            if (divNotificaciones.current === null) return
            divNotificaciones.current.classList.add("oculto")
        }, 7000)
    }, [notificaciones])

    return (
        <div ref={divNotificaciones} className="notificaciones">
            {notificaciones === null
                ? ""
                : Object.values(notificaciones).map((notificacion, i) => {
                      let clase =
                          Object.keys(notificaciones)[i] === "mensaje"
                              ? "mensajeValido"
                              : "mensajeError"
                      return (
                          <Notificacion
                              key={i}
                              texto={notificacion}
                              clase={clase}
                          />
                      )
                  })}
        </div>
    )
}

export default Notificaciones
