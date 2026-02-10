import { useContext } from "react";
import { ProductsContext } from "../context/ProductsProvider.jsx";

const useProducts = () => {
  const context = useContext(ProductsContext);

  if (!context) {
    throw new Error("Error: Could not retrieve the context.");
  }
  return context;
};
export default useProducts;
