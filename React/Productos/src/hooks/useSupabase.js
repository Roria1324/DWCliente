"use strict";
import React, { useContext } from "react";
import { sessionContext } from "../context/SupabaseSesion.jsx";

const useSupabase = () => {
  const context = useContext(sessionContext);

  if (!context) {
    throw new Error("Error: Could not retrieve the context.");
  }
  return context;
};

export default useSupabase;
