import { useContext } from "react";
import { SessionContext } from "../context/SessionProvider";
;

const useSession = () => {
  const context = useContext(SessionContext);

  if (!context) {
    throw new Error("Error: Could not retrieve the context.");
  }
  return context;
};
export default useSession;
