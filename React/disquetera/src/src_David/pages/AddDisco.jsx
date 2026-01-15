import React from "react"
import DiscoForm from "../components/forms/DiscoForm"
import { initialFormData } from "../lib/validator"

const AddDisco = () => {
	return (
		<>
			<h1>Crear un disco</h1>
			<DiscoForm updating={false} initialFormData={initialFormData} />
		</>
	)
}

export default AddDisco
