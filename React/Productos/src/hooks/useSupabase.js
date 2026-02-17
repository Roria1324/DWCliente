"use strict";
import React, { useContext, useState } from "react";
import { supabaseConnection } from "../supabase/supabase.js";

const useSupabase = () => {
  const [error, setError] = useState(null);

  const fetchTable = async (
    table,
    {
      select = "*",
      column,
      ascending = true,
      filteredColumn,
      filteredValue,
    } = {},
  ) => {
    setError(null);

    try {
      let query = supabaseConnection.from(table).select(select);

      if (column) {
        query = query.order(column, { ascending });
      }

      if (filteredColumn && filteredValue !== undefined) {
        query = query.eq(filteredColumn, filteredValue);
      }
      const { data, error } = await query;

      if (error) throw error;
      return data;
    } catch (error) {
      setError(error.message);
    }
  };

  const insertTable = async (table, input) => {
    try {
      const { data, error } = await supabaseConnection
        .from(table)
        .insert([input])
        .select()
        .single();

      if (error) throw error;

      return data;
    } catch (error) {
      setError(error.message);
    }
  };

  const editTable = async (table, input, column = "id", id) => {
    try {
      const { data, error } = await supabaseConnection
        .from(table)
        .update(input)
        .eq(column, id);

      if (error) throw error;
      return data;
    } catch (error) {
      setError(error.message);
    }
  };

  const destroyTable = async (table, id) => {
    try {
      const { data, error } = await supabaseConnection
        .from(table)
        .delete()
        .eq("id", id)
        .select()
        .single();

      if (error) throw error;

      return data;
    } catch (error) {
      setError(error.message);
    }
  };

  const getData = async (table) => {
    return await fetchTable(table);
  };

  const getItem = async (table, column = "id", value) => {
    return await fetchTable(table, {
      filteredColumn: column,
      filteredValue: value,
    });
  };

  const getSortedData = async (table, { column, ascending = true }) => {
    return await fetchTable(table, { column, ascending });
  };

  const getMultiData = async (table, select, column, row) => {
    return await fetchTable(table, {
      select: select,
      filteredColumn: column,
      filteredValue: row,
    });
  };

  return {
    fetchTable,
    getData,
    getItem,
    getSortedData,
    insertTable,
    destroyTable,
    editTable,
    getMultiData,
    error,
  };
};

export default useSupabase;
