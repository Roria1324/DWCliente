import React from "react"
import { locale, formatText } from "../../lib/locale"
import DiscTableElement from "./DiscTableElement"
import { useNavigate } from "react-router-dom"
import useDiscContext from "../../hooks/useDiscContext"
import DiscForm from "../forms/DiscoForm"

const DiscTable = ({ data }) => {
	const navigate = useNavigate()
	const { deleteById, getAll } = useDiscContext()

	if (!data || data.length === 0 || !data[0] || typeof data[0] !== "object")
		return <p>No hay datos para mostrar.</p>

	const otherKeys = Object.keys(data[0]).filter((key) => key !== "discImg" && key !== "id")
	const headers = [...otherKeys]

	const handleClick = async (e) => {
		const id = e.target.dataset.id

		if (e.target.classList.contains("delete-btn")) {
			if (!id) return
			await deleteById(id)
			await getAll()
			return
		}

		if (e.target.classList.contains("view-btn")) {
			if (!id) return
			navigate(`/discos/${id}`)
		}

		if (e.target.classList.contains("edit-btn")) {
			if (!id) return
			navigate(`/discos/${id}/edit`)
		}		
	}

	return (
		<table
			className="discos-table"
			onClick={(e) => {
				handleClick(e)
			}}
		>
			<thead>
				<tr>
					{headers.map((key) => (
						<th key={key}>{locale[key] ? formatText(locale[key]) : formatText(key)}</th>
					))}
					<th>Acciones</th>
				</tr>
			</thead>
			<tbody>
				{data.map((disc) => (
					<DiscTableElement key={disc.id} disc={disc} headers={headers} />
				))}
			</tbody>
		</table>
	)
}

export default DiscTable
