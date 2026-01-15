import React from "react"
import { locale, formatText } from "../../lib/locale"

const DiscTableElement = ({ disc, headers }) => {
	return (
		<tr key={disc.id}>
			{headers.map((key) => (
				<td key={key} data-label={locale[key]}>
					{formatText(disc[key])}
				</td>
			))}
			<td className="actions-cell">
				<button className="btn btn-blue view-btn" data-id={disc.id}>
					Ver
				</button>
				<button className="btn btn-yellow edit-btn" data-id={disc.id}>
					Editar
				</button>
				<button className="btn btn-red delete-btn" data-id={disc.id}>
					Borrar
				</button>
			</td>
		</tr>
	)
}

export default DiscTableElement
