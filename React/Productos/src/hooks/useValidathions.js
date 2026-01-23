import { useState } from "react";
import useSupabase from "./useSupabase";

const useValidathions = () => {
  const [error, setError] = useState({});
  const { signUpPassword, createCount, dataSession } = useSupabase();
  //Expresiones regulares obtenidas de nuestro amigo y vecino la Ia.
  const validateEmail = (email) => {
    if (!email) return false;
    const rex = /\S+@\S+\.\S+/;
    return rex.test(email);
  };

  const validateName = (username) => {
    if (!username) return false;
    if (username.length < 4) return false;

    return true;
  };

  const validatePassword = (password) => {
    if (!password) return false;

    if (password.length < 8) return false;
    if (password.includes(" ")) return false;
    if (!/[A-Z]/.test(password)) return false;
    if (!/[a-z]/.test(password)) return false;
    if (!/[0-9]/.test(password)) return false;
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) return false;

    return true;
  };

  const validateRegister = (email, password, username = null) => {
    let errors = {};

    if (!validateEmail(email)) {
      errors.email = "Invalid email format.";
    }

    if (username !== null && !validateName(username)) {
      errors.username = "Username must be at least 4 characters long.";
    }

    if (!validatePassword(password)) {
      errors.password =
        "Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character";
    }

    return errors;
  };

  const handleExchangeforRegister = () => {
    const errors = validateRegister(
      dataSession.email,
      dataSession.password,
      dataSession.username,
    );

    if (Object.keys(errors).length > 0) {
      setError(errors);
      return;
    }
    setError({});
    createCount();
  };

  const handleExchangeforSignUp = () => {
    const errors = validateRegister(dataSession.email, dataSession.password);

    if (Object.keys(errors).length > 0) {
      setError(errors);
      return;
    }
    setError({});
    signUpPassword();
  };

  return {
    handleExchangeforRegister,
    handleExchangeforSignUp,
    error,
  };
};

export default useValidathions;
