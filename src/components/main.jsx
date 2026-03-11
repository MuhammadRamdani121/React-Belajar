import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../../src/index.css";
import HelloWorld from "./HelloWorld";
import Multi from "./1.Multi_Components/Multiply";
import JsJsx from "./2.Jsx/JsJsx";
import ManggilProps from "./1.Multi_Components/3.props/Manggil";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelloWorld />
    <br />
    <Multi />
    <br />
    <JsJsx />
    <br />
    <ManggilProps />
  </StrictMode>,
);
