"use strict";
import React, { createContext, useEffect, useState } from "react";
import useSupabase from "../hooks/useSupabase";

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const {
    fetchTable,
    getData,
    getItem,
    insertTable,
    destroyTable,
    editTable,
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

  const insertProduct = async (data) => {
    const product = await insertTable(TABLE, data);
    if (product) {
      setDataProducts((prev) => [...prev, product]);
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

  const getProductById = async (id) => {
    const data = await getItem(TABLE, "id", id);
    return data;
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
        filtered = filtered.filter((p) => p.price >= minPrice);
      }
      if (maxPrice !== "") {
        filtered = filtered.filter((p) => p.price <= maxPrice);
      }

      setDataProducts(filtered);
      setErrorProducts("");
    } else {
      setErrorProducts(error);
    }
  };

  const editProduct = async (data, id) => {
    const updatedProduct = await editTable(TABLE, data, "id", id);

    const newProducts = dataProducts.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product,
    );
    setDataProducts(newProducts);
  };

  const destroyProduct = async (id) => {
    const deletedProduct = await destroyTable(TABLE, id);

    const newProducts = dataProducts.filter((product) => product.id !== id);

    setDataProducts(newProducts);
  };

  const elements = {
    getTable,
    insertProduct,
    getProductById,
    getProductsOrdered,
    getProductsByName,
    getProductsByPrice,
    editProduct,
    destroyProduct,
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
export { ProductsContext };
