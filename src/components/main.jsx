import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../../src/index.css";
import HelloWorld from "./HelloWorld";
import Multi from "./1.Multi_Components/Multiply";
import JavaScript from "./2.Jsx/JavaScript";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelloWorld />
    <Multi />
    <JavaScript />
  </StrictMode>,
);
