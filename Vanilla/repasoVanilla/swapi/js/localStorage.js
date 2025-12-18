"use strict"

const guardarPlaneta = (planeta) => {
    console.log(planeta)
    let planetas = obtenerPlanetasStorage()

    planetas = [planeta, ...planetas]

    localStorage.setItem("planetas", JSON.stringify(planetas))
    console.log(obtenerPlanetasStorage())
}

const borrarPlaneta = (id) => {
    const planetas = obtenerPlanetasStorage()
    const nuevosPlanetas = planetas.filter((planeta) => planeta.id !== id)
    console.log(nuevosPlanetas)
    localStorage.setItem("planetas", JSON.stringify(nuevosPlanetas))
    return
}

const planetaNoExistente = (id) => {
    console.log(id)
    if (Number.isNaN(id)) return false
    const planetas = obtenerPlanetasStorage()
    const existe = planetas.find((planeta) => planeta.id === id)
    return !existe
}

const obtenerPlanetasStorage = () => {
    const planetas = localStorage.getItem("planetas")
    return JSON.parse(planetas) || []
}

export { guardarPlaneta, obtenerPlanetasStorage, borrarPlaneta, planetaNoExistente }
