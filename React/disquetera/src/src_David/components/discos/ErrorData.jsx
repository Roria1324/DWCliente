import React from "react"
import RedirectBtn from "../buttons/RedirectBtn"
import { getError } from "../../lib/error"
import "./ErrorData.css"

const ErrorData = ({ title, text, redirect, btnText }) => {
	return (
		<div className="disco-details-container not-found">
			<h2 className="error-title">{title}</h2>
			<p className="error-message">{getError(text)}</p>

			<RedirectBtn text={btnText} redirect={redirect || "/"} />
		</div>
	)
}

export default ErrorData
