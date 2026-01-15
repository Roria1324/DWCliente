import React from "react"
import { Link } from "react-router-dom"
import "./NavMenu.css"

const NavMenu = () => {
	return (
		<div className="navbar">
			<h4 className="navbar-title">
				<a href="/">DWC</a>
			</h4>
			<nav className="navbar-nav">
				<Link to="/">Inicio</Link>
				<Link to="/discos">Discos</Link>
				<Link to="/add-disco">Agregar Disco</Link>
			</nav>
		</div>
	)
}

export default NavMenu
