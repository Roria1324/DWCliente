import React, { useContext } from "react"
import { DiscContext } from "../context/DiscProvider"

const useDiscContext = () => {
	const ctx = useContext(DiscContext)

	if (!ctx) throw new Error("Error al obtener el contexto de discos.")

	return ctx
}

export default useDiscContext
