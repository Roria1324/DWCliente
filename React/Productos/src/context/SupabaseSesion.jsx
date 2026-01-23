import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabaseConexion } from "../hooks/supabase.js";

const sessionContext = createContext();

const SupabaseSesion = ({ children }) => {
  const dataSessionStart = {
    email: "",
    password: "",
    username:""
  };

  const userStart = {};
  const errorUserStart = "";
  const sessionStartedFirst = false;

  const navigate = useNavigate();

  const [dataSession, setDataSession] = useState(dataSessionStart);
  const [user, setUser] = useState(userStart);
  const [errorUser, setErrorUser] = useState(errorUserStart);
  const [sessionStarted, setSessionStarted] = useState(sessionStartedFirst);

  const createCount = async () => {
    try {
      const { data, error } = await supabaseConexion.auth.signUp({
        email: dataSession.email,
        password: dataSession.password,
        options: {
          data: {
            display_name: dataSession.username
          }
        }
      });

      if (error) {
        throw error;
      }

      setUser(data.user);
      setDataSession(dataSessionStart);
      setErrorUser("You will receive an email confirmation.");
    } catch (error) {
      setErrorUser(error.message);
    }
  };

  const signUpPassword = async () => {
    setErrorUser(errorUserStart);

    try {
      const { data, error } = await supabaseConexion.auth.signInWithPassword({
        email: dataSession.email,
        password: dataSession.password
      });

      if(error){
        setErrorUser(error.message)
        setSessionStarted(false)
        return
      }

      setDataSession(data.user);
      setSessionStarted(true);
      navigate("/");
    } catch (error) {
      setErrorUser(error.message);
    }
  };

  const signOut = async () => {
    try {
      await supabaseConexion.auth.signOut();
      setErrorUser(errorUserStart);
      navigate("/");
      setUser(userStart);
      setErrorUser(errorUserStart);
      setSessionStarted(sessionStartedFirst);
    } catch (error) {
      setErrorUser(error.mesage);
    }
  };

  const updateData = (e) => {
    const { name, value } = e.target;
    setDataSession({ ...dataSession, [name]: value });
  };

  const elements = {
    createCount,
    signUpPassword,
    signOut,
    updateData,
    sessionStarted,
    user,
    errorUser,
    dataSession,
  };

  return (
    <sessionContext.Provider value={elements}>
      {children}
    </sessionContext.Provider>
  );
};

export default SupabaseSesion;
export { sessionContext };