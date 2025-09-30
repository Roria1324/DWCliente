const Discente = (props) => {
  const nombre = props.nombre;
  const apellidos = props.apellidos;
  const curso = props.curso;
  const aficiones = props.aficiones;
  const modulos = props.modulos;
  const comida = props.comida;

  // Desestructuración de parámetros.
  //const { nombre, apellidos, curso, aficiones, children, comida } = props.datos;

  return (
    <>
      <div>
        <p>
          {apellidos}, {nombre}
        </p>
        <p>{curso}</p>
        <p>{modulos}</p>
        <p>{aficiones}</p>
        <p>{comida}</p>
      </div>
    </>
  );
};

export default Discente;
