import { useState } from "react";

const useValidations = () => {
  const [error, setError] = useState({});

  const validateEmail = (email) => {
    if (!email) return false;
    const rex = /\S+@\S+\.\S+/;
    return rex.test(email);
  };

  const validateName = (username) => {
    if (!username) return false;
    return username.length >= 4;
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

  const validateSamePassword = (password, confirmPassword) => {
    if (!confirmPassword) return false;
    return password === confirmPassword;
  };

  const validateRegister = (email, password, username = null, confirmPassword = null) => {
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
    if (
      confirmPassword !== null &&
      !validateSamePassword(password, confirmPassword)
    ) {
      errors.confirmPassword = "Passwords do not match.";
    }

    return errors;
  };

  const validateLogin = (email, password) => {
    const errors = validateRegister(email, password);

    if (Object.keys(errors).length > 0) {
      setError(errors);
      return false;
    }

    setError({});
    return true;
  };

  const validateSignup = (email, password, username, confirmPassword) => {
    const errors = validateRegister(email, password, username, confirmPassword);

    if (Object.keys(errors).length > 0) {
      setError(errors);
      return false;
    }

    setError({});
    return true;
  };

  return {
    validateLogin,
    validateSignup,
    error,
  };
};

export default useValidations;
