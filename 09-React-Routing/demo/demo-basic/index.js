import React from "react";
import { render } from "react-dom";
import { Route, Switch, HashRouter as Router } from "react-router-dom";

import About from "./About.jsx";
import Ejemplo from "./Ejemplo.jsx";
import NavBar from "./NavBar.jsx";

//!Componente Home
function Home() {
  return (
    <div>
      <h2>Home, Soy Henry!!</h2>
    </div>
  );
}

//!Elemento Root embebido en Router, al cual arriba en el import le pusimos una alias: a HasRouter traelo como Router
const Root = (
  <Router>
    <NavBar />
    {/* <Switch> */}
    <Route exact path="/">
      {" "}
      {/* cuando estés en el path '/' renderizá 'Home', únicamente se renderiza */}
      {/* 'Home' cuando estemos en '/' */}
      <Home />
    </Route>
    {/* <Route path="/about/other">
        <h2>About Other</h2>
      </Route> */}
    <Route path="/about">
      <About />
    </Route>
    <Route path="/aboutttttt">
      <h2>Aboutttttt</h2>
    </Route>
    <Route path="/about/other">
      <h2>About Other</h2>
    </Route>
    <Route path="/ejemplo">
      {/* le pasamos propos ejemplo */}
      <Ejemplo nombre="Toni" apellido="Tralice" />
      <Ejemplo nombre="Carina" apellido="Bosio" />
    </Route>
    <Route path="/">
      {/* si no llega a coincidir con ninguna viene acá */}
      <h2>Default if no match</h2>
    </Route>
    {/* </Switch> */}
  </Router>
);

render(Root, document.querySelector("#app"));
