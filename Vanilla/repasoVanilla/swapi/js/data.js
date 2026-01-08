"use strict"

const recogerDatos = (formulario) => {
    return {
        id: formulario.planetId?.value || "",
        name: formulario.planetName?.value || "",
        orbital_period: formulario.orbitalPeriod?.value || "",
        diameter: formulario.diameter?.value || "",
        population: formulario.population?.value || "",
    }
}

const parsePlaneta = (planeta) => {
    return {
        id: planeta?.id,
        name: planeta?.name,
        orbital_period: Number.parseInt(planeta?.orbital_period) || "Indefinido",
        diameter: Number.parseInt(planeta?.diameter) || "Indefinido",
        population: Number.parseInt(planeta?.population) || "Indefinido",
    }
}
export { recogerDatos, parsePlaneta }
