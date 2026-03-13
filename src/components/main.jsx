import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../../src/index.css";
import HelloWorld from "./HelloWorld";
import Multi from "./1.Multi_Components/Multiply";
import JsJsx from "./2.Jsx/JsJsx";
import ManggilProps from "./3.props/Destructuring";
import Mengirim from "./3.props/Mengirim";
import SpreadJsx from "./4.spread/Spread";
import Container from "./5.nested_components/Container";
import TodoList from "./6.conditional/TodoList";
import ArrayMap from "./7.Collection_Components/ArrayMap";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Test Component */}
    <HelloWorld />
    <br />
    {/* 1.Multi Component */}
    <Multi />
    <br />
    {/* 2.JSX */}
    <JsJsx />
    <br />
    {/* 3.props Destructing */}
    <ManggilProps />
    {/* 3.2 props attributes */}
    <Mengirim text="Memanggil dengan Attribut" />
    <br />
    {/* 4.Spread  */}
    <SpreadJsx />
    <br />
    {/* 5.Nested Component */}
    <Container>
      <Multi />
    </Container>
    <br />
    {/* 6.Codintional */}
    <TodoList />
    <br />
    <ArrayMap />
  </StrictMode>,
);
