import React, { useState } from "react"
import { validateForm } from "../../lib/validator"
import { locale } from "../../lib/locale"
import { getError } from "../../lib/error"
import { musicTypes } from "../../lib/musicTypes"
import "./DiscoForm.css"
import useDiscContext from "../../hooks/useDiscContext"
import { useNavigate } from "react-router-dom"

const DiscoForm = ({ updating, initialFormData }) => {
	const [formData, setFormData] = useState(initialFormData)
	const [errors, setErrors] = useState({})
	const [errorMessages, setErrorMessages] = useState("")
	const { getAll, save, replaceById } = useDiscContext()
	const navigate = useNavigate()

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target
		setFormData((prev) => ({
			...prev,
			[name]: type === "checkbox" ? checked : value,
		}))

		if (errors[name]) {
			setErrors((prev) => {
				const { [name]: removedError, ...rest } = prev
				return rest
			})
		}
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		setErrorMessages("")

		const validationResult = validateForm(formData)

		if (!validationResult.ok) {
			const newErrors = validationResult.errors.reduce((acc, errorKey) => {
				acc[errorKey] = getError(`El ${locale[errorKey]} no es válido`)
				return acc
			}, {})
			setErrors(newErrors)
			return
		}

		try {
			if (updating) {
				await replaceById(formData.id, formData)
				await getAll()
				navigate("/discos")
			} else {
				formData.id = crypto.randomUUID()
				setFormData(initialFormData)
				await save(formData)
				await getAll()
			}

			setErrors({})
			setErrorMessages("Disco guardado con éxito.")
		} catch (err) {
			setErrorMessages("Error al guardar el disco.")
		}
	}

	const musicTypeOptions = Object.entries(musicTypes).map(([key, value]) => (
		<option key={key} value={key}>
			{value}
		</option>
	))

	return (
		<div className="add-disc-container">
			{(Object.keys(errors).length > 0 || errorMessages) && (
				<div id="errors-container" style={{ color: errorMessages ? "green" : "red" }}>
					{errorMessages ? (
						<p>{errorMessages}</p>
					) : (
						Object.keys(errors).map((key) => (
							<p key={key} className="error-message">
								{errors[key]}
							</p>
						))
					)}
				</div>
			)}

			<form onSubmit={handleSubmit} name="musicForm">
				<label htmlFor="discName">Nombre del disco</label>
				<input
					type="text"
					name="discName"
					id="discName"
					placeholder="Disco muy feo"
					value={formData.discName}
					onChange={handleChange}
					className={errors.discName ? "error-mode" : ""}
				/>

				<label htmlFor="discImg">Caratula del disco (URL)</label>
				<input
					type="url"
					name="discImg"
					id="discImg"
					placeholder="https://feo.com/quefeo.png"
					value={formData.discImg}
					onChange={handleChange}
				/>

				<label htmlFor="groupName">Nombre del grupo</label>
				<input
					type="text"
					name="groupName"
					id="groupName"
					placeholder="Grupo de Feos"
					value={formData.groupName}
					onChange={handleChange}
					className={errors.groupName ? "error-mode" : ""}
				/>

				<label htmlFor="datePublish">Año de publicación</label>
				<input
					type="number"
					name="datePublish"
					id="datePublish"
					placeholder="2025"
					value={formData.datePublish}
					onChange={handleChange}
					className={errors.datePublish ? "error-mode" : ""}
				/>

				<label htmlFor="musicType">Genero de música</label>
				<select
					name="musicType"
					id="musicType"
					value={formData.musicType}
					onChange={handleChange}
					className={errors.musicType ? "error-mode" : ""}
				>
					{musicTypeOptions}
				</select>

				<label htmlFor="standNumber">Localización</label>
				<input
					type="text"
					name="standNumber"
					id="standNumber"
					placeholder="ES-001AA"
					value={formData.standNumber}
					onChange={handleChange}
					className={errors.standNumber ? "error-mode" : ""}
				/>

				<div className="checkbox-container">
					<label htmlFor="isBorrowed">¿Disco Prestado?</label>
					<input
						type="checkbox"
						name="isBorrowed"
						id="isBorrowed"
						checked={formData.isBorrowed}
						onChange={handleChange}
					/>
				</div>

				<button type="submit" id="btn-save" className="btn btn-green">
					{updating ? "Actualizar discos" : "Guardar discos"}
				</button>
			</form>
		</div>
	)
}

export default DiscoForm
