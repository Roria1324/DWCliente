"use strict"

const guardarAnime = (anime) => {
    let animesLocales = obtenerAnimesLocales()
    animesLocales = [...animesLocales, anime]
    localStorage.setItem("animes", JSON.stringify(animesLocales))
}

const borrarAnime = (id) => {
    let animes = obtenerAnimesLocales()
    animes = animes.filter((anime) => anime.mal_id !== id)
    localStorage.setItem("animes", JSON.stringify(animes))
    return
}

const obtenerAnimesLocales = () => {
    return JSON.parse(localStorage.getItem("animes")) || []
}

export { obtenerAnimesLocales, guardarAnime, borrarAnime }
