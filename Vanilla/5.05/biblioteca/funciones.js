"user strict"

const pintarDiscos = (json = []) => {

    let texto = "";
    json.map((v, i, a) => {
        texto+=`
        <div class="fila>
          <input class="borrar" type="button" value="Borrar disco">
          <div class="celda">
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
const borrarDisco = (discos , idDiscos) => {
  return discos.filter((discos) => discos.)
}

const limpiarFormulario = (formulario) => {
  formulario.reset();
};

export {pintarDiscos, limpiarFormulario, borrarDisco} ;