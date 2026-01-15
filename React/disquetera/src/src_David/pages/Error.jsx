import React from "react"
import ErrorData from "../components/discos/ErrorData"

const Error = () => {
	return (
		<ErrorData
			title={"Página no encontrada"}
			text={"Lo sentimos, esa página no existe"}
			redirect={"/"}
			btnText={"Volver al inicio"}
		/>
	)
}

export default Error
