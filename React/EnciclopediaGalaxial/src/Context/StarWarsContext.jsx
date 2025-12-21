import { createContext, useContext } from "react";
import obtenerDatos from "../Api/obtenerInfo.js";

const StarWarsContext = createContext();

export const useStarWars = () => useContext(StarWarsContext);

export const StarWarsProvider = ({ children }) => {

  const fetchData = async (url) => {
    return await obtenerDatos(url);
  };

  return (
    <StarWarsContext.Provider value={{ fetchData }}>
      {children}
    </StarWarsContext.Provider>
  );
};