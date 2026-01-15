import React from "react"
import { useNavigate } from "react-router-dom"
import "./RedirectBtn.css"

const RedirectBtn = ({ text, redirect }) => {
	const navigate = useNavigate()

	return (
		<>
			<button
				className="btn btn-blue btn-redirect"
				onClick={() => {
					navigate(redirect)
				}}
			>
				{text}
			</button>
		</>
	)
}

export default RedirectBtn
