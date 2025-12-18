"use strict"

const recogerDatos = (formulario) => {
    const title = formulario.title.value
    const year = formulario.year.value
    const genres = formulario.genres.value
    const mal_id = formulario.mal_id.value
    const image_url = formulario.image_url.value
    const watched = formulario.watched.checked
    console.log(watched)

    return {
        title,
        year,
        genres,
        mal_id,
        image_url,
        watched,
    }
}

const crearJSON = (datos) => {
    const title = datos.title
    const year = Number.parseInt(datos.year) || datos.year
    const genres = datos.genres
    const mal_id = Number.parseInt(datos.mal_id) || datos.mal_id
    const image_url = datos.image_url
    const watched = datos.watched

    return {
        title,
        year,
        genres,
        mal_id,
        image_url,
        watched,
    }
}
export { recogerDatos, crearJSON }
