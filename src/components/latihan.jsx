import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../../src/index.css";
import ComponentReact from "./LatihanSoal/soal1";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ComponentReact />
  </StrictMode>,
);
