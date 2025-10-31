

/*const acordeon = () => {
    const divs = document.querySelectorAll("body div")

    divs.forEach((div, index) => {
        if (index % 2 === 0){

            const encabezado = div.querySelector("p")
            const siguienteDiv = divs[index + 1]
            const section = siguienteDiv.querySelector("section")

            encabezado.addEventListener("click", () => {
                section.style.display = section.style.display === "none" ? "block" : "none"
            })

            /*
            //Curiosidad con estos dos eventos con solo pasar el ratón por encima se aparece y desaparece.
            encabezado.addEventListener("mouseover", () => {
                section.style.display = "block"
            })

            encabezado.addEventListener("mouseleave", () => {
                section.style.display = "none"
            })
            
        }
    })
}
export default acordeon;*/