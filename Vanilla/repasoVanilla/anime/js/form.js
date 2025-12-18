"use strict"

const actualizarFormulario = (formulario, anime) => {
    if (!anime) {
        console.log("Formato no valido")
        return
    }
    formulario.title.value = anime.title || anime.title_english || anime.title_japanese
    formulario.year.value = anime.year || "Indefinido"
    formulario.genres.value = anime.genres.map((genre) => genre.name).join(", ") || "Indefinido"
    formulario.mal_id.value = anime.mal_id
    formulario.image_url.value = anime.images.jpg.image_url || "Indefinido"
}

const resetFormulario = (formulario) => {
    formulario.reset()
}

export { actualizarFormulario, resetFormulario }
