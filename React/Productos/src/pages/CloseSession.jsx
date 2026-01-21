import React, { useContext } from "react";
import { sessionContext } from "../context/SupabaseSesion.jsx";

const CloseSession = () => {
  const { signOut } = useContext(sessionContext);
  return (
    <div>
      <button onClick={() => signOut()}>Close Session</button>
    </div>
  );
};

export default CloseSession;
