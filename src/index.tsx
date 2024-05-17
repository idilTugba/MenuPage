import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./asset/styles/app.scss";
import Home from "./pages/Home";
import { MenuProvider } from "./context/MenuContext";
import { BasketProvider } from "./context/BasketContex";

function App() {
  return (
    <>
      <BasketProvider>
        <MenuProvider>
          <Home />
        </MenuProvider>
      </BasketProvider>
    </>
  );
}

const root = createRoot(document.getElementById("app")!);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
