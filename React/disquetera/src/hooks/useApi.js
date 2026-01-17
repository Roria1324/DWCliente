"use strict";
import { useState } from "react";

const useAPI = () => {
    const [cargar, setCargar] = useState(false);
    const [error, setError] = useState(null)

    const solicitud = async (url, option = {}) => {
        setCargar(true)
        setError(null)
        try {
            const respuesta = await fetch(url, {
                
                headers : {
                    "Content-type" : "application/json"
                },
                ...option
            })

            if (!respuesta.ok) {
                throw new Error(`Algo ha ido mal: ${respuesta.status}`)
            }
            const datos = await respuesta.json()
            return datos
        } catch (error){
            throw error
        } finally {
            setCargar(false)
        }
    };

    const get = (url) => {
        return solicitud(url, { method : "GET"});
    };

    const post = (url, body) => {
        solicitud(url, {
            method : "POST",
            body : JSON.stringify(body)
        });
    };

    const editPUT = (url, body) => {
        return solicitud(url, {
            method : "PUT",
            body : JSON.stringify(body)
        });
    };

    const editPATCH = (url, body) => {
        return solicitud(url, {
            method : "PATCH",
            body : JSON.stringify(body)
        });
    };

    const borrar = (url) => {
        return solicitud(url, { method : "DELETE" })
    }

    return {
        cargar,
        error,
        get,
        post,
        editPUT,
        editPATCH,
        borrar
    }
}

export default useAPI;