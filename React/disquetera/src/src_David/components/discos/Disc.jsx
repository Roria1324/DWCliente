import React from "react"
import fallbackImg from "../../assets/img/fallback.png"
import RedirectBtn from "../buttons/RedirectBtn"

import "./Disc.css"

const Disc = ({ data }) => {
	return (
		<div className="disco-details-container">
			<header className="details-header">
				<h1 className="disco-title">{data.discName || "Título Desconocido"}</h1>
				<p className="artist-lead">Artistas: {data.groupName || "Artistas Desconocidos"}</p>
			</header>

			<div className="details-content-row">
				<div className="cover-column">
					<div className="cover-card">
						<div className="cover-body">
							<p className="cover-caption">Portada del Álbum</p>
							<img
								src={data.discImg}
								alt=""
								onError={(e) => {
									e.target.src = fallbackImg
								}}
							/>
						</div>
					</div>
				</div>

				<div className="info-column">
					<h2 className="info-subtitle">Información Adicional</h2>
					<ul className="info-list">
						<li className="info-list-item">
							Año de Lanzamiento: <span>{data.datePublish || "No especificado"}</span>
						</li>
						<li className="info-list-item">
							Género: <span>{data.musicType || "No especificado"}</span>
						</li>
						<li className="info-list-item">
							Estante: <span>{data.standNumber || "No especificado"}</span>
						</li>
						<li className="info-list-item">
							Prestado: <span>{data.isBorrowed ? "Sí" : "No"}</span>
						</li>
					</ul>
				</div>
			</div>

			<RedirectBtn text="Volver atrás" redirect="/discos" />
		</div>
	)
}

export default Disc
