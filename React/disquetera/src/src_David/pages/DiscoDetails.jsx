import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import Loading from "../components/utils/Loading"
import ErrorData from "../components/discos/ErrorData"
import Disc from "../components/discos/Disc"
import useDiscContext from "../hooks/useDiscContext"
import { httpStatus } from "../lib/error"

const DiscoDetails = () => {
	const { id } = useParams()
	const { loading, error, getById, viewDisc } = useDiscContext()

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

	return <Disc data={viewDisc} />
}

export default DiscoDetails
