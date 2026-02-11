import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import SessionProvider from "./context/SessionProvider.jsx";
import ProductsProvider from "./context/ProductsProvider.jsx";
import ProviderList from "./context/ProviderList.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <SessionProvider>
        <ProductsProvider>
          <ProviderList>
            <App />
          </ProviderList>
        </ProductsProvider>
      </SessionProvider>
    </BrowserRouter>
  </StrictMode>,
);
