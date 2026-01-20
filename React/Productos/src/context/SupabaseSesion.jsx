import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabaseConexion } from "../hooks/supabase.js";

const sessionContext = createContext();

const SupabaseSesion = ({ children }) => {
  const dataSessionStart = {
    email: "",
    password: "",
  };

  const userStart = {};
  const errorUserStart = {};
  const sessionStartedFirst = false;

  const navigate = useNavigate();

  const [dataSession, setDataSession] = useState(dataSessionStart);
  const [user, setUser] = useState(userStart);
  const [errorUser, setErrorUser] = useState(errorUserStart);
  const [sessionStarted, setSessionStarted] = useState(sessionStartedFirst);

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
      setDataSession(data)
      setSessionStarted(true);
    } catch (error) {
      setErrorUser(error.message);
    }
  };

  const signOut = async () => {
    try {
      await supabaseConexion.auth.signOut();
      setErrorUser(errorUserStart);
      navigate("/");
      setUser(userStart)
      setErrorUser(errorUserStart)
      setSessionStarted(sessionStartedFirst)
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
    <sessionContext.Provider value={elements}>{children}</sessionContext.Provider>
  );
};

export default SupabaseSesion;
