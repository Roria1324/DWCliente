// Función para consumir promesas generalista.
const traerDatos = (url) => {
  // Obtiene datos de una API y los transforma a JSON.
  return (
    fetch(url)
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((datos) => {
        if (datos.results) {
          return datos.results;
        } else {
          return datos;
        }
      })
      // Si se produce un error se devuelve un mensaje.
      // Sólo afecta a errores de red.
      .catch((error) => {
        return `Se ha producido un error: ${error.message}`;
      })
  );
};

// Versión de traer datos con gestión de errores correcta
// y utilizando async/await: más fácil de leer, mantener y depurar.
const traerDatosBien = async (url) => {
  try {
    // Obtiene datos de una API.
    const respuesta = await fetch(url);
    // Se comprueba la respuesta: si ha ido mal.
    if (!respuesta.ok) {
      // Se lanza un error.
      throw new Error(
        `Error en traerDatosBien: ${respuesta.status} - ${respuesta.statusText}`
      );
    }
    // Si todo ha ido bien: se devuelven los datos.
    const datos = await respuesta.json();
    // Particularidad de la API.
    if (datos.results) {
      return datos.results;
    } else {
      return datos;
    }
  } catch (error) {
    // Se propaga el error para manejarlo en el componente externo.
    // De esta forma se puede parametrizar.
    throw error;
  }
};

export { traerDatos, traerDatosBien };
