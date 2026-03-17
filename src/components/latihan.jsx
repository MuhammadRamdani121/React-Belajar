import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../../src/index.css";
import ComponentReact from "./LatihanSoal/soal1";
import Soal2 from "./LatihanSoal/soal2";
import Soal3 from "./LatihanSoal/Soal3";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ComponentReact />
    <Soal2 nama="Rehan" />
    <br />
    <Soal3 />
  </StrictMode>,
);
