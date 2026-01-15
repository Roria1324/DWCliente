import React, { createContext, useEffect, useState } from "react"
import useAPI from "../hooks/useAPI"

const DiscContext = createContext()

const DiscProvider = ({ children }) => {
	const API_URL = "http://localhost:3000/discos"

	const [discs, setDisc] = useState([])
	const [viewDisc, setViewDisc] = useState({})

	const { get, post, patch, put, destroy, loading, error } = useAPI()

	const getAll = async () => setDisc(await get(API_URL))
	const save = async (body) => await post(`${API_URL}`, body)

	const getById = async (id) => setViewDisc(await get(`${API_URL}/${id}`))

	const replaceById = async (id, body) => await put(`${API_URL}/${id}`, body)
	const modifyById = async (id, body) => await patch(`${API_URL}/${id}`, body)
	const deleteById = async (id) => await destroy(`${API_URL}/${id}`)

	const box = {
		loading,
		error,
		discs,
		viewDisc,
		getAll,
		save,
		getById,
		replaceById,
		modifyById,
		deleteById,
	}

	useEffect(() => {
		getAll()
	}, [])

	return <DiscContext value={box}>{children}</DiscContext>
}

export default DiscProvider
export { DiscContext }
