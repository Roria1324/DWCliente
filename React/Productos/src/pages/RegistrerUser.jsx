import React from "react";
import { useContext } from "react";
import { sessionContext } from "../context/SupabaseSesion.jsx";

const RegistrerUser = () => {
  const { createCount, errorUser, updateData } = useContext(sessionContext);
  return (
    <div className="create-count">
      <h2>Register</h2>

      <div className="login-name">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Eustaquio"
          onChange={(e) => {
            updateData(e);
          }}
        />
      </div>

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
      </div>
      <div className="login-button">
        <button onClick={() => createCount()}>Register</button>
      </div>
      <p>{errorUser}</p>
    </div>
  );
};

export default RegistrerUser;
