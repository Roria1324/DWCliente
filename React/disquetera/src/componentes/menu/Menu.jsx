"use strict";

import {Link} from "react-router-dom"
import React from 'react'
import "./Menu.css"

const Menu = () => {
  return (
    <>

     <nav>
        <div className="head">
            <div className="texto">
                <h2>La disquetera rompe oídos</h2>
            </div>

            <div className="menu-links">
                <Link className="menu-element" to="/">Inicio</Link>
                <Link className="menu-element" to="/addDiscos">Añadir Discos</Link>
                <Link className="menu-element" to="/verDiscos">Discos</Link>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Menu