import React, { useContext, useEffect, useState } from "react"
import DiscTable from "./DiscTable"
import "./DiscosList.css"
import Loading from "../utils/Loading"
import useDiscContext from "../../hooks/useDiscContext"

const DiscosList = () => {
	const [filterText, setFilterText] = useState("")
	const [filteredDiscs, setFilteredDiscs] = useState([])
	const { discs, loading } = useDiscContext()

	useEffect(() => {
		if (!filterText.trim()) {
			setFilteredDiscs(discs)
			return
		}

		const value = filterText.trim().toLowerCase()

		const newFilteredDiscs = discs.filter((disc) =>
			disc?.discName?.toLowerCase().includes(value)
		)

		setFilteredDiscs(newFilteredDiscs)
	}, [discs, filterText])

	return loading ? (
		<Loading />
	) : (
		<div className="list-page-container">
			<div className="controls">
				<input
					id="filter-input"
					type="text"
					placeholder="Buscar por nombre"
					value={filterText}
					onChange={(e) => setFilterText(e.target.value)}
				/>
			</div>

			<div id="data-container">
				<DiscTable data={filteredDiscs} />
			</div>
		</div>
	)
}

export default DiscosList
