import React from "react";

const ListadoFeo = (props) => {
  const { name, address, country, email, phone } = props.datos;
  return (
    <div>
      <h3>{name}</h3>
      <p>
        {address}, {country}. {email} ({phone})
      </p>
    </div>
  );
};

export default ListadoFeo;
