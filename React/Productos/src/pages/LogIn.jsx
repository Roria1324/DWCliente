import React from "react";
import { useContext, useState } from "react";
import useSupabase from "../hooks/useSupabase.js";


const LogIn = () => {
  const { updateData, signUpPassword, errorUser, dataSession } =
    useSupabase();
  const [error, setError] = useState({});

  //Expresiones regulares obtenidas de nuestro amigo y vecino la Ia.
  const validateEmail = (email) => {
    if (!email) return false;
    const rex = /\S+@\S+\.\S+/;
    return rex.test(email);
  };

  const validatePassword = (password) => {
    if (!password) return false;

    if (password.length < 8) return false;
    if (password.includes(" ")) return false;
    /*if (!/[A-Z]/.test(password)) return false;
      if (!/[a-z]/.test(password)) return false;
      if (!/[0-9]/.test(password)) return false;
      if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) return false;*/

    return true;
  };

  const validateSignUp = (email, password) => {
    let errors = {};

    if (!validateEmail(email)) {
      errors.email = "Invalid email format.";
    }

    if (!validatePassword(password)) {
      errors.password =
        "Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character";
    }

    return errors;
  };

  const handleSignUp = () => {
    const errors = validateSignUp(dataSession.email, dataSession.password);

    if (Object.keys(errors).length > 0) {
      setError(errors);
      return;
    }

    signUpPassword();
  };

  return (
    <div className="login">
      <h2>Log In</h2>
      <div className="login-email">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@gmail.com"
          onChange={(e) => {
            updateData(e);
          }}
        />
        {error.email && <p className="message-error">{error.email}</p>}
      </div>
      <div className="login-password">
        <label htmlFor="email">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="********"
          onChange={(e) => {
            updateData(e);
          }}
        />
        {error.password && <p className="message-error">{error.password}</p>}
      </div>
      <div className="login-button">
        <button onClick={handleSignUp}>Login</button>
      </div>
      <p>{errorUser}</p>
    </div>
  );
};

export default LogIn;
