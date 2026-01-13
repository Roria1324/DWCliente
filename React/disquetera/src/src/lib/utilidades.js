"use strict"

// Función que retorna el último parámetro de una URL. Por ejemplo: /people/2 -> 2
const idDesdeUrl = (url) => {
    try {
        if (!url || typeof url !== "string") return null

        const urlLimpia = url.trim().replace(/\/+$/, "")
        const partes = urlLimpia.split("/")
        const ultimo = partes.pop()

        return ultimo || null
    } catch (error) {
        return null
    }
}

const capitalizar = (texto) => {
    if (!texto || typeof texto !== "string") return ""
    return texto.charAt(0).toUpperCase() + texto.slice(1)
}
export { idDesdeUrl, capitalizar }
