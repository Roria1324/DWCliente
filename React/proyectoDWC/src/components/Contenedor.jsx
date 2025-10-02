import React from "react";
import "./Contenedor.css";

const Contenedor = (props) => {
  return (
    <div className='Contenedor_contenedor'>
      {props.children}
      <h2>Título </h2>
      <p>Pie de página.</p>
    </div>
  );
};

export default Contenedor;
