"use strict";
import React, { createContext, useState } from "react";
import { supabaseConexion } from "../hooks/supabase.js";
import useProducts from "../hooks/useProducts.js";

const contextSupabase = createContext();

const SupabaseProvider = ({ children }) => {
  const INITIAL_ERROR = "";

  const { getTable } = useProducts();
  const [error, setError] = useState({});
  const [data, setData] = INITIAL_ERROR;

  const getData = async () => {
    try {
      getTable("products");
      setData(data);
    } catch (error) {
      setError(error);
    }
  };

  const elements = {
    getData,
    data,
    error,
  };

  return <contextSupabase value={elements}>{children}</contextSupabase>;
};

export default SupabaseProvider;
