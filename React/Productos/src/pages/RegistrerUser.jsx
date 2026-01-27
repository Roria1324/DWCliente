import React, { useState } from "react";
import useSupabase from "../hooks/useSupabase.js";
import useValidathions from "../hooks/useValidathions.js";
import "./LogIn-Register.css";

const RegistrerUser = () => {
  const { errorUser, updateData, dataSession } = useSupabase();
  const { handleExchangeforRegister, error } = useValidathions();

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
      <div className="login-button">
        <button onClick={handleExchangeforRegister}>Register</button>
      </div>
      <p>{errorUser}</p>
    </div>
  );
};

export default RegistrerUser;