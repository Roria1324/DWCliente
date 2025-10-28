"use strict"
import {Link} from "react-router-dom"
import './Menu.css'

const Menu = () => {
    return(
        <>
            <nav>
                <div className="head">
                <div className="foto">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/El_nuevo_logo_de_cuevana.png/330px-El_nuevo_logo_de_cuevana.png" 
                    alt="foto"
                    />
                </div>

                <div className="menu-links">
                    <Link className="menu-element" to="/">Inicio</Link>
                    <Link className="menu-element" to="/peliculas">Películas</Link>
                    <Link className="menu-element" to="/actores">Actores</Link>
                    <Link className="menu-element" to="/acerca-de">Acerca De</Link>
                    <Link className="menu-element" to="/contacto">Contacto</Link>
                </div>
                </div>
            </nav>
        </>
    )
}

export default Menu