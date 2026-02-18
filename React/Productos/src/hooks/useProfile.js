import React, { useContext } from "react";
import { ProfileContext } from "../context/ProfileProvider";

const useProfile = () => {
  const context = useContext(ProfileContext);

  if (!context) {
    throw new Error("Error: Could not retrieve the context.");
  }
  return context;
};

export default useProfile;
