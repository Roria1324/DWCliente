"use strict";

// Función para consumir promesas específica.
const traerPlanetas = () => {
  // La API fetch siempre devolverá un objeto Promise que habrá que consumir.
  fetch("https://swapi.info/api/planets")
    .then((respuesta) => {
      return respuesta.json(); // Se transforma el resultado a un objeto JSON.
    })
    .then((datos) => {
      // Se pinta en el DOM el contenido de la llamada a la API.
      let plantilla = "";
      Array.isArray(datos) && datos.length
        ? datos.map((planeta) => {
            let gente = parseInt(planeta.population)
              ? parseInt(planeta.population).toLocaleString("es-ES")
              : "Desconocido";
            plantilla += `<div class="planeta borde"><h2>${planeta.name}</h2><p>Población: ${gente}</p></div>`;
          })
        : (plantilla = "<h3>No se han encontrado planetas en la galaxia.</h3>");

      document.getElementById("planetas").innerHTML = plantilla;
    })
    .catch((error) => {
      return `Se ha producido un error: ${error.message}`; // Por si se produce un error.
    });
};

// Función para consumir promesas generalista.
const traerDatos = (url) => {
  // Obtiene datos de una API y los transforma a JSON.
  return (
    fetch(url)
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((datos) => {
        return datos;
      })
      // Si se produce un error se devuelve un mensaje.
      .catch((error) => {
        return `Se ha producido un error: ${error.message}`;
      })
  );
};

export { traerPlanetas, traerDatos };
