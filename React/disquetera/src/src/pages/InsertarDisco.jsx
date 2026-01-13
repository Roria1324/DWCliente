import React from "react"
import { useState } from "react"
import FormularioDiscos from "../components/discos/FormularioDiscos.jsx"
import Notificaciones from "../components/notificaciones/Notificaciones.jsx"
import "./InsertarDisco.css"

const InsertarDisco = () => {
    const [notificaciones, setNotificaciones] = useState([])

    return (
        <div className="insertarDisco">
            <Notificaciones notificaciones={notificaciones} />
            <FormularioDiscos
                notificaciones={notificaciones}
                setNotificaciones={setNotificaciones}
            />
        </div>
    )
}

export default InsertarDisco
