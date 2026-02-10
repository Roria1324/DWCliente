import React, { createContext, useState } from "react";
import { supabaseConnection } from "../supabase/supabase";

const ListContext = createContext();

const ProviderList = ({ children }) => {
  const [lists, setLists] = useState([]);
  const [error, setError] = useState(null);

  const getList = async (userId) => {
    setError(null);
    try {
      const { data, error } = await supabaseConnection
        .from("lista_compra")
        .select("*")
        .eq("propietario_id", userId)
        .order("created_at", { ascending: true });

      if (!data) throw error;

      setLists(data);
    } catch (error) {
      setError(error.message);
    }
  };

  const createList = async (name, userId) => {
    try {
      const { data, error } = await supabaseConnection
        .from("lista_compra")
        .insert([{ nombre: name, propietario_id: userId }])
        .select()
        .single();

      if (!data) throw error;

      setLists((prev) => [data, ...prev]);
    } catch (error) {
      setError(error.message);
    }
  };

  const deleteList = async (listId) => {
    try {
      const { data, error } = await supabaseConnection
        .from("lista_compra")
        .delete("id")
        .eq("id", listId);
      if (!data) throw error;
      getList();
    } catch (error) {
      setError(error.message);
    }
  };

  const elements = {
    getList,
    createList,
  };
  return (
    <ProviderList.Provider value={elements}>{children}</ProviderList.Provider>
  );
};

export default ProviderList;
export { ListContext };
