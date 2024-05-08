import React from "react";
import { createRoot } from "react-dom/client";

import "./asset/styles/app.scss";
import Home from "./pages/Home";
import { MenuProvider } from "./context/MenuContext";

function App() {
  return (
    <>
      <MenuProvider>
        <Home />
      </MenuProvider>
    </>
  );
}

const root = createRoot(document.getElementById("app")!);
root.render(<App />);
