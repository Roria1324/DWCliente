import React from "react"
import { useNavigate } from "react-router-dom"
import "./Error.css"

const Error = () => {
    const redirect = useNavigate()

    return (
        <div className="error">
            <img
                className="error-img"
                src="https://wafuu.com/cdn/shop/products/nintendo-mirror-super-mario-boo-238523.png?v=1706144121"
                alt="Imagen 404"
            />
            <h1>Error 404</h1>
            <h5>
                O no tengo la ruta que buscas, o tu no sabes escribirla friki
            </h5>
            <button onClick={() => redirect("/")} className="error-btn">
                Volver a Inicio
            </button>
        </div>
    )
}

export default Error
