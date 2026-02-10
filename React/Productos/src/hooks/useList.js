
import { useContext } from "react";
import { ListContext } from "../context/ProviderList.jsx";

const useList = () => {
  const context = useContext(ListContext);

  if (!context) {
    throw new Error("Error: Could not retrieve the context.");
  }
  return context;
};
export default useList;