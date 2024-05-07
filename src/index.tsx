import React from "react";
import { createRoot } from "react-dom/client";

import "./asset/styles/app.scss";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Home />
    </>
  );
}

const root = createRoot(document.getElementById("app")!);
root.render(<App />);
