import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabaseConnection } from "../supabase/supabase.js";
import useSupabase from "../hooks/useSupabase.js";

const SessionContext = createContext();

const SessionProvider = ({ children }) => {
  const dataSessionStart = {
    email: "",
    password: "",
    username: "",
    confirmPassword: "",
  };

  const userStart = {};
  const errorUserStart = "";
  const sessionStartedFirst = false;

  const navigate = useNavigate();

  const [dataSession, setDataSession] = useState(dataSessionStart);
  const [user, setUser] = useState(userStart);
  const [users, setUsers] = useState([])
  const [errorUser, setErrorUser] = useState(errorUserStart);
  const [sessionStarted, setSessionStarted] = useState(sessionStartedFirst);
  const [rol, setRol] = useState("");

  const TABLE = "roles";

  const { getItem, getMultiData } = useSupabase();

  const createCount = async () => {
    try {
      const { data, error } = await supabaseConnection.auth.signUp({
        email: dataSession.email,
        password: dataSession.password,
        options: {
          data: {
            display_name: dataSession.username,
          },
        },
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
      const { data, error } = await supabaseConnection.auth.signInWithPassword({
        email: dataSession.email,
        password: dataSession.password,
      });

      if (error) {
        setErrorUser(error.message);
        setSessionStarted(false);
        return;
      }

      setUser(data.user);
      setSessionStarted(true);
      setDataSession(dataSessionStart);
      navigate("/");
    } catch (error) {
      setErrorUser(error.message);
    }
  };

  const signOut = async () => {
    try {
      await supabaseConnection.auth.signOut();
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

  const getRol = async () => {
    if (!user?.id) return;

    const data = await getItem(TABLE, "id", user.id);
    if (data && data.length > 0) setRol(data[0].rol);
  };

  const isAdmin = () => {
    return rol === "administrador";
  };

  const loadAsignatedRoles = async () => {
    try {
      const data = await getMultiData(
        "roles",
        `
      *,
        perfiles (
         email
        )
      `,
      );
      if (data) setUsers(data);

    } catch (error) {
      setErrorUser(error.message);
    }
  };

  console.log(users);


  useEffect(() => {
    supabaseConnection.auth.onAuthStateChange((e, session) => {
      if (!session) return navigate("/");

      setDataSession(session);
      setUser(session.user);
      setSessionStarted(true);
      navigate("/");
    });
  }, []);

  useEffect(() => {
    if (user?.id) {
      getRol();
    }
  }, [user]);

  const elements = {
    createCount,
    signUpPassword,
    signOut,
    updateData,
    getRol,
    isAdmin,
    loadAsignatedRoles,
    sessionStarted,
    user,
    users,
    errorUser,
    dataSession,
    rol,
  };

  return (
    <SessionContext.Provider value={elements}>
      {children}
    </SessionContext.Provider>
  );
};

export default SessionProvider;
export { SessionContext };
