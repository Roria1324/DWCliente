import React, { createContext, useState, useEffect } from "react";
import { supabaseConexion } from "../supabase/supabase.js";
import { useNavigate } from "react-router-dom";

const contextoSesion = createContext();

/**
 * Métodos más utilizados del objeto Auth de Supabase:
 *
 * signUp               -> registrar usuario nuevo,
 * signInWithPassword	  -> inicio de sesión tradicional,
 * signInWithOtp        -> inicio de sesión sin contraseña,
 * signInWithOAuth	    -> inicio de sesión con servicios de terceros,
 * signOut	            -> cerrar sesión,
 * getUser	            -> obtener datos del usuario que inicia la sesión,
 * getSesion            -> obtener datos de la sesión,
 * updateUser	          -> actualizar datos del usuario actual y
 * resetPasswordForEmail-> cambiar la contraseña del usuario.
 *
 */

const ProveedorSesion = ({ children }) => {
  /** Valores iniciales para los estados */
  const datosSesionInicial = {
    email: "",
    password: "",
  };
  const usuarioInicial = {};
  const errorUsuarioInicial = "";
  const sesionIniciadaInicial = false;

  /**
   * Función para la navegación programática.
   */
  const navegar = useNavigate();

  /**
   * Estados para el control de la sesiíon.
   */
  const [datosSesion, setDatosSesion] = useState(datosSesionInicial);
  const [usuario, setUsuario] = useState(usuarioInicial);
  const [errorUsuario, setErrorUsuario] = useState(errorUsuarioInicial);
  const [sesionIniciada, setSesionIniciada] = useState(sesionIniciadaInicial);

  // Antes de empezar -> configurar el servidor de Supabase.

  /**
   * Función para crear cuenta.
   * Se usa  el nombre de usuario y contraseña.
   */
  const crearCuenta = async () => {
    try {
      const { data, error } = await supabaseConexion.auth.signUp({
        email: datosSesion.email,
        password: datosSesion.password,
      });

      if (error) {
        throw error;
      } else {
        setErrorUsuario(
          "Recibirás un correo electrónico para la confirmación de la cuenta.",
        );
      }
      // Se revisa el objeto data por consola.
      //console.log(data);
    } catch (error) {
      setErrorUsuario(error.message);
    }
    /**
     * El valor de session depende de la configuración del servidor y del valor de la opción
     * Authentication -> Sign In/Providers -> Email -> Secure email change:
     *    - Si está activada, se devuelve el objeto "user" y "session" es null (no hay sesión),
     *    - Si está desactivada, se devuelve tanto "user" como "session" (sesión iniciada).
     */
  };

  /**
   * Función para iniciar sesión o crear usuario.
   * Si el usuario existe se inicia la sesión en lugar de crearla.
   */
  const iniciarSesionPassword = async () => {
    setErrorUsuario(errorUsuarioInicial);
    try {
      // Función asíncrona para iniciar sesion con usuario/contraseña.
      const { data, error } = await supabaseConexion.auth.signInWithPassword({
        email: datosSesion.email,
        password: datosSesion.password,
        /**
         *  No es necesario especificar la ruta de redirección
         *  ya que se encuentra especificada en el servidor.
         *  Es posible indicar una redirección diferente desde aquí si
         *  el diseño de la aplicación así lo requiere.
         * */
        options: {
          emailRedirectTo: "http://localhost:5173/",
        },
      });
      if (error) {
        throw error;
      }
      // Se revisa por consola el objeto data.
      //console.log(data);
    } catch (error) {
      setErrorUsuario(error.message);
    }
  };

  /**
   * Función para cerrar la sesión.
   * Funciona con cualquier método de inicio de sesión.
   */
  const cerrarSesion = async () => {
    try {
      // Se cierra la sesión en el servidor de Supabase.
      await supabaseConexion.auth.signOut();
      setErrorUsuario(errorUsuarioInicial);
      // Hay que redirigir la aplicación a la parte pública.
      navegar("/supabase/inicio");
    } catch (error) {
      setErrorUsuario(error.message);
    }
  };

  /**
   * Función para obtener los datos del usuario/a que ha iniciado
   * la sesión y actualizar el estado.
   */
  const obtenerUsuario = async () => {
    try {
      const { data, error } = await supabaseConexion.auth.getUser();

      if (error) {
        throw error;
      }
      setUsuario(data.user);
      setErrorUsuario(errorUsuarioInicial);
      /* Imprimir usuarios por consola (data y estado).
      console.log(estado);
      console.log(data.user); */
    } catch (error) {
      setErrorUsuario(error.message);
    }
  };

  /**
   * Función para actualizar los datos de un formulario
   * al estado "datosSesion".
   */
  const actualizarDato = (evento) => {
    const { name, value } = evento.target;
    setDatosSesion({ ...datosSesion, [name]: value });
  };

  useEffect(() => {
    /**
     * Al cargar de este componente (el contexto)) se debe comprobar
     * si la sesión de usuario está activa. La mejor manera es crear un monitor
     * (listener) hacia la sesión de los servidores de Supabase.
     *
     * El monitor se carga sólo una vez durante el montaje del contexto y queda a la escucha.
     * Por eso se realiza una vez en el useEffect sin dependencias y no es necesario
     * controlar si hay sesión cada vez que se carga un documento
     * (a no ser que se requiera el acceso a una página en concreto).
     *
     * Cada vez que se produzca un cambio en la sesión, se ejecuta el código contenido
     * en la función pasada como parámetro.
     *
     * Son dos los parámetros que recibe esa función (como buen callback que es):
     *    -> session, objeto con los datos de la sesión activa.
     *    -> event, cadena de texto con el nombre del evento que ha ocurrido,
     *       Posibles valores:
     *          -> "INITIAL_SESSION"
     *          -> "SIGNED_IN"
     *          -> "SIGNED_OUT"
     *          -> "PASSWORD_RECOVERY"
     *          -> "TOKEN_REFRESHED"
     *          -> "USER_UPDATED"
     * */
    const suscripcion = supabaseConexion.auth.onAuthStateChange(
      (event, session) => {
        // Se puede utilizar el operador negación para invertir el orden.
        if (session) {
          //console.log(session);
          // Si hay sesión se carga la parte privada de la web.
          navegar("/supabase/listado");
          // Se imprime por consola con fines formativos.
          //console.log(session);
          setSesionIniciada(true);
          // Información del usuario que tiene sesión iniciada.
          obtenerUsuario();
        } else {
          // Si no hay sesión, se redirige a la parte pública de la web.
          navegar("/supabase/iniciarSesion");
          setSesionIniciada(false);
        }
      }
    );
    // Se revisa el objeto por consola (sólo con fines formativos).
    //console.log(suscripcion);
  }, []);

  /**
   * Objeto a compartir por el contexto.
   */
  const datosProveer = {
    crearCuenta,
    iniciarSesionPassword,
    cerrarSesion,
    actualizarDato,
    sesionIniciada,
    usuario,
    errorUsuario,
  };

  return (
    <contextoSesion.Provider value={datosProveer}>
      {children}
    </contextoSesion.Provider>
  );
};

export default ProveedorSesion;
export { contextoSesion };
