"user strict"

const pintarDiscos = (json = []) => {

    let texto = "";
    json.map((v, i, a) => {
        texto+=`
        <div class="fila>
          <div class="celda">
          <input type="button" id="${v.id}" class="borrar" value="Borrar">
            Disco: ${v.nombreDisco},
            Caratula: <img src="${v.caratulaDisco}">,
            Nombre del grupo: ${v.nombreGrupo},
            Año de publicación: ${v.yearPublication},
            Género: ${v.genero},
            Prestado: ${v.prestado}.
          </div>
        </div>`
    })
    return texto;
}
const borrarDisco = (discos , idDisco) => {
  return discos.filter((disco) => disco.id !== idDisco)
}

const limpiarFormulario = (formulario) => {
  formulario.reset();
};

export {pintarDiscos, limpiarFormulario, borrarDisco} ;