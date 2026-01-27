"use strict";
import React, { createContext, useState } from "react";
import { supabaseConexion } from "../hooks/supabase";

const contextProducts = createContext();

const ProductsProvider = ({ children }) => {
  const [errorProducts, setErrorProducts] = useState("");
  const [dataProducts, setDataProducts] = useState([]);

  const getTable = async () => {
    try {
      const { data, error } = await supabaseConexion
        .from('productos')
        .select('*');

      if (error) throw error;

      setDataProducts(data);
      setErrorProducts("");
    } catch (error) {
      setErrorProducts(error.message);
    }
  };

  const elements = {
    getTable,
    dataProducts,
    errorProducts,
  };

  return (
    <contextProducts.Provider value={elements}>
      {children}
    </contextProducts.Provider>
  );
};

export default ProductsProvider;
export { contextProducts };
