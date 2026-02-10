import React, { useContext } from "react";
import { SessionContext } from "../context/SessionProvider.jsx";
import "./SignOut.css"

const SignOut = () => {
  const { signOut } = useContext(SessionContext);
  return (
    <div className="container-button">
      <button className="close-button" onClick={() => signOut()}>Sign Out</button>
    </div>
  );
};

export default SignOut;
