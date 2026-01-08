import React, { useState, useEffect } from "react";
import ValorEstado from "../components/tools/ValorEstado";

const CRUDFetch = () => {
  const [discentes, setDiscentes] = useState([]);
  /**
   * Constante con la URL de la API.
   * */
  const API_URL = "http://localhost:3000/discentes";

  /**
   * Objeto con un discente nuevo:
   *  -> en la versión real se obtendrá desde un formulario controlado,
   *  -> NUNCA se le pregunta (ni muestra) el id al usuario (se genera un UUID).
   */

  const discenteNuevo = {
    id: "5",
    nombre: "Feo2",
    apellidos: "De verdad",
    curso: "2DAW",
    modulos: "DWC",
    aficiones: "Cazar libélulas",
    comida: "Macarrones con chorizo",
  };

  /**
   * Objeto con datos modificados:
   *  -> en la versión real se obtienen lo datos desde un formulario controlado,
   *  -> NUNCA se actualiza el id (se corre el riesgo de perder referencias en la BBDD).
   */

  const discenteEditado = {
    id: "5",
    nombre: "Feo2",
    apellidos: "De verdad",
    curso: "2DAW",
    modulos: "DWC",
    aficiones: "Cazar gamusinos",
    comida: "Macarrones",
  };

  /**
   * Listado de datos del servidor (nada nuevo).
   */

  const obtenerDiscentes = async (url) => {
    try {
      const respuesta = await fetch(url);
      if (!respuesta.ok) {
        throw new Error(
          `Error en traerDiscentes: ${respuesta.status} - ${respuesta.statusText}`
        );
      }
      const datos = await respuesta.json();
      // Se devuelven los datos en lugar de modificar el estado directamente.
      return datos;
    } catch (error) {
      throw error;
    }
  };

  /** Obtención de datos desde un formulario.
   *
   *   -> En Vanilla se puede construir directamente cogiendo los datos desde formulario
   *       uno a uno (si son pocos):
   *       const datosNuevos = {
   *     		email: document.getElementById('nombre').value,
   *         comentarios: document.getElementById('apellidos').value
   *       }
   *
   *   -> O de una sola vez con FormData:
   *     const datosNuevos = new FormData(document.getElementById('formulario-discente'));
   *
   *   -> En React siempre se trabajará con estados (recuerda que todos los formularios deben ser controlados).
   *
   */

  const guardarDiscente = async (url, datos) => {
    try {
      const respuesta = await fetch(url, {
        method: "POST",
        body: JSON.stringify(datos),
      });

      if (!respuesta.ok) {
        throw new Error(
          `Error en guardarDiscentes: ${respuesta.status} - ${respuesta.statusText}`
        );
      }
    } catch (error) {
      throw error;
    }
  };

  /**
   * Es necesario, además de la URL, el id del discente a eliminar.
   */

  const borrarDiscente = async (url, id) => {
    try {
      const respuesta = await fetch(`${url}/${id}`, {
        method: "DELETE",
      });

      if (!respuesta.ok) {
        throw new Error(
          `Error en guardarDiscentes: ${respuesta.status} - ${respuesta.statusText}`
        );
      }
    } catch (error) {
      throw error;
    }
  };

  /**
   * El flujo para esta acción es:
   *  -> se obtienen los datos de un discentes,
   *  -> se meten en un estado que controla un formulario,
   *  -> se recogen los datos del formulario (se comprueban),
   *      se actualizan en la BBDD (total o parcialmente) y
   *  -> se informa al/la usuario/a de forma correcta.
   */

  const editarDiscenteCompleto = async (url, id, datos) => {
    try {
      const respuesta = await fetch(`${url}/${id}`, {
        method: "PUT",
        body: JSON.stringify(datos),
      });

      if (!respuesta.ok) {
        throw new Error(
          `Error en editarDiscentesCompleto: ${respuesta.status} - ${respuesta.statusText}`
        );
      }
    } catch (error) {
      throw error;
    }
  };

  const editarDiscenteParcial = async (url, id, datos) => {
    try {
      const respuesta = await fetch(`${url}/${id}`, {
        method: "PATCH",
        body: JSON.stringify(datos),
      });

      if (!respuesta.ok) {
        throw new Error(
          `Error en editarDiscentesParcial: ${respuesta.status} - ${respuesta.statusText}`
        );
      }
    } catch (error) {
      throw error;
    }
  };

  /**
   * Función asíncrona para ejecutarse en el montaje del componente.
   */

  const cargarDiscentes = async () => {
    let datos = await obtenerDiscentes(API_URL);
    setDiscentes(datos);
  };

  useEffect(() => {
    cargarDiscentes();
  }, []);

  /**
   * Pregunta de diseño.
   * Tras cada modificación, creación o elimincación de los datos
   * ¿es preferible volver a traer los datos o modificar el estado local?
   */

  return (
    <>
      <div>
        <button
          onClick={async (evento) => {
            await guardarDiscente(API_URL, discenteNuevo);
            cargarDiscentes();
          }}
        >
          Guardar discente
        </button>
        <button
          onClick={async (evento) => {
            await borrarDiscente(API_URL, "5");
            cargarDiscentes();
          }}
        >
          Borrar discente
        </button>
        <button
          onClick={async () => {
            await editarDiscenteCompleto(API_URL, "5", discenteEditado);
            cargarDiscentes();
          }}
        >
          Actualizar discente completo
        </button>
        <button
          onClick={async () => {
            await editarDiscenteParcial(API_URL, "5", {
              nombre: "Muy Feo2",
              apellidos: "En serio",
            });
            cargarDiscentes();
          }}
        >
          Actualizar discente parcial
        </button>
      </div>
      <ValorEstado estado={discentes} titulo={"discentes"} />
    </>
  );
};

export default CRUDFetch;
