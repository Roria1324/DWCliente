import { isStrEmpty } from "./validator.js"

const locale = {
	discName: "nombre del disco",
	groupName: "nombre del grupo",
	musicType: "tipo de música",
	datePublish: "año",
	standNumber: "número de estante",
	discImg: "caratula",
	isBorrowed: "prestado",
	id: "identificador",
}

const capitalize = (input) => input.charAt(0).toUpperCase() + input.slice(1)
const formatBoolean = (input) => (typeof input === "boolean" && input ? "Sí" : "No")
const formatEmptyStr = (input) => isStrEmpty(input) && "Sin contenido"

const formatText = (input) => {
	if (typeof input === "boolean") return formatBoolean(input)
	if (typeof input !== "string" || input.length === 0) return formatEmptyStr(input)

	return capitalize(input)
}

export { capitalize, formatEmptyStr, formatBoolean, formatText, locale }
