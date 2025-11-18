"user strict"

const pintarDiscos = (json = []) => {

    let texto = "";
    json.map((v, i, a) => {
        texto+=`<div class="fila> <div class="celda">El disco ${v.nombreDisco}, ${v.nombreGrupo} , ${v.yearPublication} </div></div>`
    })
    return texto;
}

const limpiarFormulario = (formulario) => {
  formulario.reset();
};

export {pintarDiscos, limpiarFormulario} ;