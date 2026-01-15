import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import DiscoForm from "../components/forms/DiscoForm"
import useDiscContext from "../hooks/useDiscContext"
import Loading from "../components/utils/Loading"
import ErrorData from "../components/discos/ErrorData"

const EditDisco = () => {
	const { id } = useParams()
	const { getById, viewDisc, loading, error } = useDiscContext()

	useEffect(() => {
		getById(id)
	}, [id])

	if (loading) return <Loading />
	if (error)
		return (
			<ErrorData
				title={httpStatus[error]["title"] || "Disco no válido"}
				text={httpStatus[error]["text"] || "No se ha podido encontrar ese disco"}
				redirect={"/discos"}
				btnText={"Volver atrás"}
			/>
		)

	return (
		<>
			<h1>Editando disco</h1>
			<DiscoForm updating={true} initialFormData={viewDisc} />
		</>
	)
}

export default EditDisco
