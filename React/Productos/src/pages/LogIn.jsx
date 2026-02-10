import React from "react";
import { useState } from "react";
import useValidations from "../hooks/useValidations.js";
import "./LogIn-Register.css";
import useSession from "../hooks/useSession.js";

const LogIn = () => {
  const { updateData, errorUser, dataSession, signUpPassword } = useSession();
  const { validateLogin, error } = useValidations();

  const handleLogin = () => {
    const isValid = validateLogin(dataSession.email, dataSession.password);

    if (!isValid) return;

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
          value={dataSession.email}
          placeholder="example@gmail.com"
          onChange={(e) => {
            updateData(e);
          }}
          autoFocus
        />
        {error.email && <p className="message-error">{error.email}</p>}
      </div>
      <div className="login-password">
        <label htmlFor="email">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={dataSession.password}
          placeholder="********"
          onChange={(e) => {
            updateData(e);
          }}
        />
        {error.password && <p className="message-error">{error.password}</p>}
      </div>
      <div className="login-button">
        <button onClick={handleLogin}>Login</button>
      </div>
      <p>{errorUser}</p>
    </div>
  );
};

export default LogIn;
