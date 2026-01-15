const regex = {
	name: /^.{5,}$/,
	year: /^\d{4}$/,
	selected: /^(rock|pop|jazz|blues|metal|reggaeton|clásica|electrónica)$/,
	stand: /^ES-\d{3}[A-Z]{2}$/,
}

const isNumber = (input) => !isNaN(input)
const isArray = (input) => typeof input === "object" && Array.isArray(input)
const isString = (input) => typeof input === "string"
const isStrEmpty = (input) => typeof input !== "string" || input.length === 0

const isNameValid = (input) => regex["name"].test(input)
const isYearValid = (input) => regex["year"].test(input)
const isMusicType = (input) => regex["selected"].test(input)
const isStandValid = (input) => regex["stand"].test(input)

const validateForm = (formattedInput) => {
	let errors = []

	const checks = {
		discName: isNameValid(formattedInput.discName),
		groupName: isNameValid(formattedInput.groupName),
		datePublish: isYearValid(formattedInput.datePublish),
		musicType: isMusicType(formattedInput.musicType),
		standNumber: isStandValid(formattedInput.standNumber),
	}

	for (const check in checks) {
		if (checks[check]) continue
		errors = [...errors, check]
	}

	return {
		ok: errors.length === 0,
		errors: errors,
	}
}

export const initialFormData = {
	discName: "",
	discImg: "",
	datePublish: "",
	groupName: "",
	musicType: "rock",
	standNumber: "",
	isBorrowed: false,
}

export {
	isNameValid,
	isYearValid,
	isMusicType,
	isStandValid,
	isArray,
	isNumber,
	isString,
	validateForm,
	isStrEmpty,
}
