"use strict"

const numRandom = (max) => {
    return Math.trunc(Math.random() * max + 1)
}

const idPlaneta = (url) => {
    if (!url) return null
    return Number.parseInt(url.split("/").at(-1))
}

export { numRandom, idPlaneta }
