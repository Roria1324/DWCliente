"use strict";
import React, { createContext, useState } from "react";
import { supabaseConexion } from "../hooks/supabase.js";

const contextSupabase = createContext();

const SupabaseProvider = ({children}) => {

    const ERROR_START = "";


    const [error, setErrors] = useState(ERROR_START);
    
  
  return (
        <div>SupabaseProvider</div>
    );
};

export default SupabaseProvider;
