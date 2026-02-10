"use strict";
import React, { createContext, useEffect, useState } from "react";
import useSupabase from "../hooks/useSupabase";

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const {
    fetchTable,
    getData,
    error,
  } = useSupabase();

  const TABLE = "productos";

  const [dataProducts, setDataProducts] = useState([]);
  const [errorProducts, setErrorProducts] = useState("");

  const getTable = async () => {
    const data = await getData(TABLE);
    if (data) {
      setDataProducts(data);
      setErrorProducts("");
    } else {
      setErrorProducts(error);
    }
  };

  const getProductsOrdered = async (field, order) => {
    const data = await fetchTable(TABLE, {
      column: field,
      ascending: order === "asc",
    });

    if (data) {
      setDataProducts(data);
      setErrorProducts("");
    } else {
      setErrorProducts(error);
    }
  };

  const getProductsByName = async (search, field, order) => {
    const data = await fetchTable(TABLE, {
      column: field,
      ascending: order === "asc",
      filteredColumn: "name",
      filteredValue: search,
    });

    if (data) {
      setDataProducts(data);
      setErrorProducts("");
    } else {
      setErrorProducts(error);
    }
  };

  const getProductsByPrice = async (minPrice, maxPrice) => {
    const data = await fetchTable(TABLE, {
      filteredColumn: minPrice ? "price" : null,
      filteredValue: minPrice || null,
    });

    if (data) {
      let filtered = data;

      if (minPrice !== "") {
        filtered = filtered.filter(p => p.price >= minPrice);
      }
      if (maxPrice !== "") {
        filtered = filtered.filter(p => p.price <= maxPrice);
      }

      setDataProducts(filtered);
      setErrorProducts("");
    } else {
      setErrorProducts(error);
    }
  };

  const elements = {
    getTable,
    getProductsOrdered,
    getProductsByName,
    getProductsByPrice,
    dataProducts,
    errorProducts,
  };

  return (
    <ProductsContext.Provider value={elements}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
export {ProductsContext};
