import React from "react";
import { useContext } from "react";
import { sessionContext } from "../context/SupabaseSesion.jsx";

const LogIn = () => {
  const { updateData, signUpPassword, errorUser } = useContext(sessionContext);

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
        <button onClick={() => signUpPassword()}>
          Login
        </button>
      </div>
      <p>{errorUser}</p>
    </div>
  );
};

export default LogIn;
