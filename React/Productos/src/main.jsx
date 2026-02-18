import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import SessionProvider from "./context/SessionProvider.jsx";
import ProductsProvider from "./context/ProductsProvider.jsx";
import ProviderList from "./context/ProviderList.jsx";
import ProfileProvider from "./context/ProfileProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <SessionProvider>
        <ProductsProvider>
          <ProviderList>
            <ProfileProvider>
              <App />
            </ProfileProvider>
          </ProviderList>
        </ProductsProvider>
      </SessionProvider>
    </BrowserRouter>
  </StrictMode>,
);
