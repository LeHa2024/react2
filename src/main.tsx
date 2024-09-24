import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Homepage from "./App.tsx";
import "./index.css";
import "./App.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Homepage />
  </StrictMode>
);
