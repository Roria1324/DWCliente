import React, { useState } from "react";
import useValidations from "../hooks/useValidations.js";
import "./LogIn-Register.css";
import useSession from "../hooks/useSession.js";

const RegistrerUser = () => {
  const { errorUser, updateData, createCount, dataSession } = useSession();
  const { validateSignup, error } = useValidations();

  const handleSignUp = () => {
    const isValid = validateSignup(
      dataSession.email,
      dataSession.password,
      dataSession.username,
      dataSession.confirmPassword
    );

    if (!isValid) return;

    createCount();
  };

  return (
    <div className="create-count">
      <h2>Register</h2>

      <div className="login-name">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          value={dataSession.username}
          placeholder="Eustaquio"
          onChange={(e) => {
            updateData(e);
          }}
        />
        {error.username && <p className="message-error">{error.username}</p>}
      </div>

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
      <div className="login-password">
        <label htmlFor="confirmPassword">Confirm password</label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          value={dataSession.confirmPassword}
          placeholder="********"
          onChange={updateData}
        />
        {error.confirmPassword && (
          <p className="message-error">{error.confirmPassword}</p>
        )}
      </div>
      <div className="login-button">
        <button onClick={handleSignUp}>Register</button>
      </div>
      <p>{errorUser}</p>
    </div>
  );
};
export default RegistrerUser;
