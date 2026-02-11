import React, { createContext, useState } from "react";
import { supabaseConnection } from "../supabase/supabase";
import useSupabase from "../hooks/useSupabase";

//Antes de ponerme a hacer las listas he cambiado toda la infraestructura del código (en tiempo record)
//espero que ahora este todo en orden.

const ListContext = createContext();

const ProviderList = ({ children }) => {
  const {
    fetchTable,
    insertTable,
    destroyTable,
    getMultiData,
    getData,
    error,
  } = useSupabase();
  const [currentList, setCurrentList] = useState(null);
  const [lists, setLists] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  const getList = async (userId) => {
    const data = await fetchTable("listas_compra", {
      filteredColumn: "propietario_id",
      filteredValue: userId,
      column: "created_at",
      ascending: false,
    });

    setLists(data || []);
  };

  const createList = async (data) => {
    const result = await insertTable("listas_compra", data);
    // Me aseguro de tener un objeto único, no un array, para el estado.
    const newList = Array.isArray(result) ? result[0] : result;
    if (newList) {
      setLists((prev) => [newList, ...prev]);
    }
  };

  const deleteList = async (listId) => {
    const destroy = await destroyTable("listas_compra", listId);
    setLists(lists.filter((list) => list.id !== listId));
    // Se se borra la lista que el usuario está viendo en detalle, se limpia la vista.
    if (currentList && currentList.id === listId) setCurrentList(null);
  };

  const getListWithProducts = async (listId) => {
    try {
      // Consulta : trae la lista, sus productos intermedios y la info de cada producto.
      const data = await getMultiData(
        "listas_compra",
        `
          *,
          listas_productos (
            id,
            cantidad,
            productos (
              id,
              name,
              weight,
              price
            )
          )
          `,
        "id",
        listId,
      );
      setCurrentList(data?.[0]);
      return data?.[0];
    } catch (error) {
      setError(error.message);
    }
  };

  const loadCatalog = async () => {
    const data = await getData("productos");
    setAllProducts(data || []);
  };

  const addProductToList = async (lista_id, producto_id, cantidad = 1) => {
    try {
      // upsert: si la combinación lista+producto ya existe, actualiza la cantidad. Si no, crea una nueva fila.
      const { data, error } = await supabaseConnection
        .from("listas_productos")
        .upsert([{ lista_id, producto_id, cantidad }], {
          onConflict: "lista_id, producto_id",
        })
        .select()
        .single();

      if (error) throw error;
      // Se refresca toda la información de la lista para ver los cambios reflejados.
      await getListWithProducts(lista_id);
    } catch (error) {
      throw error;
    }
  };

  const removeProductFromList = async (itemId) => {
    try {
      await destroyTable("listas_productos", itemId);
      setCurrentList((prev) => {
        if (!prev) return null;

        return {
          ...prev,
          listas_productos: prev.listas_productos.filter(
            (item) => item.id !== itemId,
          ),
        };
      });
    } catch (error) {
      throw error;
    }
  };

  const elements = {
    getList,
    createList,
    deleteList,
    getListWithProducts,
    loadCatalog,
    addProductToList,
    removeProductFromList,
    error,
    currentList,
    lists,
    allProducts,
  };
  return (
    <ListContext.Provider value={elements}>{children}</ListContext.Provider>
  );
};

export default ProviderList;
export { ListContext };
