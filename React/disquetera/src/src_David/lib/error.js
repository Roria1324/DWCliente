const error = [
	"padawan del despiste",
	"jedi sin sable",
	"sith del bug eterno",
	"stormtrooper de la puntería lógica",
	"hobbit sin mapa",
	"señor del fallo",
	"druida del caos digital",
	"hechicero supremo del despiste",
	"caballero del error galáctico",
	"aprendiz del Lado Oscuro del teclado",
	"vengador del bug perdido",
	"héroe sin tutorial",
	"guardia imperial del código roto",
	"maestro Jedi de los fallos sutiles",
	"sith lord del error 404",
	"programador sin midiclorianos",
	"visionario del caos binario",
	"constructor de bugs intergalácticos",
	"tu eras el elegido... pero de la estupidez",
	"padawan de los errores infinitos",
	"cazador de bugs sin licencia",
	"diplomático del desastre galáctico",
	"erudito del Lado Oscuro de la sintaxis",
	"mago de los bugs prohibidos",
	"joven Jedi sin la Fuerza del conocimiento",
	"lord sith del despropósito digital",
	"droide sin firmware",
	"piloto kamikaze del código",
	"filósofo del error universal",
	"anciano maestro de las malas prácticas",
	"padawan que olvidó el punto y coma",
	"guardían del templo de los bugs",
	"caminante del sendero del error",
	"stormtrooper de la lógica perdida",
	"sabio de la Fuerza… pero con warnings",
	"aprendiz del caos binario",
	"lord sith de la sintaxis incorrecta",
]

const httpStatus = {
	404: {
		title: "Disco No Encontrado",
		text: "Lo sentimos, el disco no existe",
	},
	500: {
		title: "Error Interno",
		text: "Ha ocurrido un error interno, inténtalo más tarde.",
	},
}

const getRandomMessage = () => error[Math.floor(Math.random() * error.length)]
const getError = (baseMessage) => `${baseMessage}, ${getRandomMessage()}.`

export { getError, httpStatus }
