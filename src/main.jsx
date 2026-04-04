import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import TampilkanNama from "./components/Latihan_SoalAI1/tampilkanNama.jsx";
import TampilkanHobi from "./components/Latihan_SoalAI1/tampilkanHobi.jsx";
import TambahUmur from "./components/Latihan_SoalAI1/tampilkanUmur.jsx";
import TampilkanNamaProps from "./components/Latihan_SoalAI2/tampilkanNamaAi.jsx";
import TampilkanHobiProps from "./components/Latihan_SoalAI2/tampilkanHobiAi.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TampilkanNama />
    <TampilkanHobi />
    <TambahUmur />
    <br />
    <TampilkanNamaProps nama="Ramdani" />
    <TampilkanHobiProps hobi={["ngoding", "ReactJS"]} />
  </StrictMode>,
);
