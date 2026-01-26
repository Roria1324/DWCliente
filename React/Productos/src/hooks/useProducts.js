import { useState } from "react";
import { supabaseConexion } from "./supabase";

const useProducts = () => {

    const [data, setData] = useState({})
    const [error, setError] = useState("");

    const getTable = async () => {
        try {
        const { data, error } = await supabaseConexion.from(TABLE).select("*");
        setData(data);
        } catch (error) {
        setError(error);
        }
    };
    
    return {
        getTable,
        error,
        data,
    }
};
export default useProducts;
