import React from "react"
import { Routes, Route } from "react-router-dom"
import AddDisco from "../pages/AddDisco"
import Discos from "../pages/Discos"
import Error from "../pages/Error"
import Inicio from "../pages/Inicio"
import DiscoDetails from "../pages/DiscoDetails"
import EditDisco from "../pages/EditDisco"

const Rutas = () => {
	return (
		<Routes>
			<Route path="/" element={<Inicio />} />
			<Route path="add-disco" element={<AddDisco />} />
			<Route path="discos" element={<Discos />} />
			<Route path="discos/:id" element={<DiscoDetails />} />
			<Route path="discos/:id/edit" element={<EditDisco />} />
			<Route path="*" element={<Error />} />
		</Routes>
	)
}

export default Rutas
