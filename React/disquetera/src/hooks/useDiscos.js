"use strict";
import React, {useContext} from "react";
import { ContextoDiscos } from "../contexto/ProveedorDiscos.jsx";

const useDiscos = () => {
    const contexto = useContext(ContextoDiscos);
    
    if(!contexto){
        throw new Error("Error, no se ha obtenido el contexto de los discos.")
    }
    return contexto;
}

export default useDiscos;