"use strict"

const guardarDisco = (datos) => {
    let discosLocales = obtenerDiscos()

    // Se añade un campo id para identificar al disco
    datos = { id: ultimoId(), ...datos }

    discosLocales = [...discosLocales, JSON.parse(JSON.stringify(datos, null, 2))]

    localStorage.setItem("discos", JSON.stringify(discosLocales, null, 2))
}

const ultimoId = () => {
    const discos = obtenerDiscos()
    if (discos.length === 0) {
        return 0
    }
    return discos[discos.length - 1]?.id + 1
}

const borrarDisco = (id) => {
    const discos = obtenerDiscos()
    const nuevosDiscos = discos.filter((disco) => disco?.id !== id)
    localStorage.setItem("discos", JSON.stringify(nuevosDiscos, null, 2))
    return
}

// En lugar de usar getElementById() se hace usa de useRef() para
// devolver los discos filtrados por el valor indicado en la barra
// de búsqueda
const filtrarDiscos = (busquedaRef, discos) => {
    let valorBusqueda = busquedaRef.current.value
    let discosFiltrados = []
    if (valorBusqueda) {
        discosFiltrados = discos.filter((disco) => {
            for (let clave in disco) {
                let valor = disco[clave]
                if (typeof valor === "number" || typeof valor === "boolean") {
                    valor = valor.toString()
                }
                if (valor.toLowerCase().includes(valorBusqueda.toLowerCase())) return true
            }
            return false
        })
    }
    return discosFiltrados
}

export { guardarDisco, filtrarDiscos }
