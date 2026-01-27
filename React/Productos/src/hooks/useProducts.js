import { useContext } from "react";
import { contextProducts } from "../context/ProductsProvider.jsx";

const useProducts = () => {
  const context = useContext(contextProducts);

  if (!context) {
    throw new Error("Error: Could not retrieve the context.");
  }
  return context;
};
export default useProducts;
