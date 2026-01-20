import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabaseConexion } from "../hooks/supabase.js";

const sesionContext = createContext();

const SupabaseSesion = ({ children }) => {
  const dataSesionStart = {
    email: "",
    password: "",
  };

  const userStart = {};
  const errorUserStart = {};
  const sesionStartedFirst = false;

  const navigate = useNavigate();

  const [dataSession, setDataSession] = useState(dataSesionStart);
  const [user, setUser] = useState(userStart);
  const [errorUser, setErrorUser] = useState(errorUserStart);
  const [sessionStarted, setSessionStarted] = useState(sesionStartedFirst);

  const createCount = async (userData) => {
    try {
      const { data, error } = await supabaseConexion.auth.signUp({
        email: userData.email,
        password: userData.password,
        option: {
          data: userData.username,
        },
      });
      setDataSession(data);
      setUser(data?.user);
      setSessionStarted(true);

      if (error) {
        throw error;
      } else {
        setErrorUser("You will receive an email confirmation.");
      }
    } catch (error) {
      setErrorUser(error.message);
    }
  };

  const signUpPassword = async () => {
    setErrorUser(errorUserStart);

    try {
      const { data, error } = await supabaseConexion.auth.signInWithPassword({
        email: dataSession.email,
        password: dataSession.password,
      });
    } catch (error) {
      setErrorUser(error.message);
    }
  };

  const signOut = async () => {
    try {
      await supabaseConexion.auth.signOut();
      setErrorUser(errorUserStart);
      navigate("/");
    } catch (error) {
      setErrorUser(error.mesage);
    }
  };

  const elements = {
    createCount,
    signUpPassword,
    signOut,
    sesionStartedFirst,
    user,
    errorUser,
  };

  return (
    <sesionContext.Provider value={elements}>{children}</sesionContext.Provider>
  );
};

export default SupabaseSesion;
