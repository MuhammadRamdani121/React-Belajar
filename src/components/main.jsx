import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../../src/index.css";
import HelloWorld from "./HelloWorld";
import Multi from "./1.Multi_Components/Multiply";
import JsJsx from "./2.Jsx/JsJsx";
import ManggilProps from "./3.props/Destructuring";
import Mengirim from "./3.props/Mengirim";
import SpreadJsx from "./4.spread/Spread";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelloWorld />
    <br />
    <Multi />
    <br />
    <JsJsx />
    <br />
    <ManggilProps />
    <Mengirim text="Memanggil dengan Attribut" />
    <br />
    <SpreadJsx />
  </StrictMode>,
);
