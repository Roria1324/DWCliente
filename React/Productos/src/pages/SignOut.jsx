import React, { useContext } from "react";
import { sessionContext } from "../context/SupabaseSesion.jsx";
import "./SignOut.css"

const SignOut = () => {
  const { signOut } = useContext(sessionContext);
  return (
    <div className="container-button">
      <button className="close-button" onClick={() => signOut()}>Sign Out</button>
    </div>
  );
};

export default SignOut;
