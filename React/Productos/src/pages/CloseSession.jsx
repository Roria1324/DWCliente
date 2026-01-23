import React, { useContext } from "react";
import { sessionContext } from "../context/SupabaseSesion.jsx";
import "./CloseSession.css"

const CloseSession = () => {
  const { signOut } = useContext(sessionContext);
  return (
    <div className="container-button">
      <button className="close-button" onClick={() => signOut()}>Close Session</button>
    </div>
  );
};

export default CloseSession;
