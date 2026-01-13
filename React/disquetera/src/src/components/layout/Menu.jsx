import React from "react"
import { Link } from "react-router-dom"
import "./Menu.css"

const Menu = () => {
    return (
        <nav className="menu">
            <ul className="menu-links">
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/insertar-disco">Insertar disco</Link>
                </li>
                <li>
                    <Link to="/listar-disco">Listar discos</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Menu
