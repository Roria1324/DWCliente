"use strict"

import { idPlaneta } from "./lib.js"

const plantillaPlanetaRandom = (planeta) => {
    const planetaDataString = JSON.stringify({
        id: idPlaneta(planeta.url),
        name: planeta.name,
        orbital_period: planeta.orbital_period,
        diameter: planeta.diameter,
        population: planeta.population,
    })

    const plantilla = `<div class="apiPlanetDetail">
            <h5>Planeta encontrado: ${planeta.name}</h5>
            <p>Período Orbital: ${planeta.orbital_period} días</p>
            <p>Diametro: ${planeta.diameter} km</p>
            <p>Población: ${planeta.population} habitantes</p>
            <button id="addApiPlanetButton" 
                    class="submitButton"
                    data-planeta-data='${planetaDataString}'>
                Añadir ${planeta.name} a mi Colección
            </button>
        </div>`
    return plantilla
}

const plantillaPlanetaColeccion = (planeta) => {
    const plantilla = `<div class="planetItem">
        <h5>${planeta.name}</h5>
        <p>Período Orbital: ${planeta.orbital_period} días</p>
        <p>Diametro: ${planeta.diameter} km</p>
        <p>Población: ${planeta.population} habitantes</p>
        <button id="deletePlanetButton" 
            class="deleteButton" 
            data-planet-id="${planeta.id}">
            Borrar ${planeta.name}
        </button>
    </div>`
    return plantilla
}

const plantillaModal = (id) => {
    const plantilla = `<div class="modal-overlay">
    <div class="modal-content">
        <h3>¿Estás seguro?</h3>
        <div class="modal-actions">
            <button id="cancelDeleteButton" class="cancelButton" >
                No, mantener
            </button>
            
            <button id="confirmDeleteButton" class="deleteButton" data-planet-id="${id}">
                Sí, eliminar
            </button>
        </div>
    </div>
</div>`
    return plantilla
}

export { plantillaPlanetaRandom, plantillaPlanetaColeccion, plantillaModal }
