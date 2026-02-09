"use strict";
import React, { createContext, useState } from "react";
import { supabaseConexion } from "../hooks/supabase";
import { useNavigate } from "react-router-dom";

const contextProducts = createContext();

const ProductsProvider = ({ children }) => {
  const [errorProducts, setErrorProducts] = useState("");
  const [dataProducts, setDataProducts] = useState([]);
  const navigate = useNavigate();

  const getTable = async () => {
    try {
      const { data, error } = await supabaseConexion
        .from("productos")
        .select("*");

      if (error) throw error;

      setDataProducts(data);
      setErrorProducts("");
    } catch (error) {
      setErrorProducts(error.message);
    }
  };

  const getProductsOrdered = async (field, order) => {
    try {
      const { data, error } = await supabaseConexion
        .from("productos")
        .select("*")
        .order(field, { ascending: order === "asc" });

      if (error) throw error;

      setDataProducts(data);
      setErrorProducts("");
    } catch (error) {
      setErrorProducts(error.message);
    }
  };

  const getProductsByName = async (search, field, order) => {
    try {
      const { data, error } = await supabaseConexion
        .from("productos")
        .select("*")
        .ilike("name", `%${search}%`)
        .order(field, { ascending: order === "asc" });

      if (error) throw error;

      setDataProducts(data);
      setErrorProducts("");
    } catch (error) {
      setErrorProducts(error.message);
    }
  };

  const createProduct = async (product) => {
    try {
      const { error } = await supabaseConexion
        .from("productos")
        .insert([product]);

      if (error) throw error;

      await getTable();
      navigate("/products");
    } catch (error) {
      setErrorProducts(error.message);
    }
  };

  const updateProduct = async (id, product) => {
    try {
      const { error } = await supabaseConexion
        .from("productos")
        .update(product)
        .eq("id", id);

      if (error) throw error;

      await getTable();
    } catch (error) {
      setErrorProducts(error.message);
    }
  };

  const getProductById = async (id, product) => {
    try {
      const { error } = await supabaseConexion
        .from("productos")
        .select("*")
        .eq("id", id)
        .single();

      if (error) throw error;

      await getTable();
    } catch (error) {
      setErrorProducts(error.message);
    }
  };

  const deleteProduct = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?",
    );

    if (!confirmDelete) return;

    try {
      const { error } = await supabaseConexion
        .from("productos")
        .delete()
        .eq("id", id);

      if (error) throw error;

      setDataProducts((prev) => prev.filter((p) => p.id !== id));
    } catch (error) {
      setErrorProducts(error.message);
    }
  };

  const getProductsByPrice = async (minPrice, maxPrice) => {
    try {
      let query = supabaseConexion.from("productos").select("*");

      if (minPrice !== "") {
        query = query.gte("price", minPrice);
      }

      if (maxPrice !== "") {
        query = query.lte("price", maxPrice);
      }

      const { data, error } = await query;

      if (error) throw error;

      setDataProducts(data);
      setErrorProducts("");
    } catch (error) {
      setErrorProducts(error.message);
    }
  };

  const elements = {
    getTable,
    getProductsOrdered,
    getProductsByName,
    getProductsByPrice,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
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
