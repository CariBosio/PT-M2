import React from "react";
import { render } from "react-dom";
import Producto from "./src/components/Product.jsx";
import "./src/global.gcss";
import OtroComponente from "./src/components/OtroComponente.jsx";

render(
  <div>
    <Producto title="Prueba" price={400} />
    <OtroComponente />
  </div>,
  document.getElementById("app")
);
