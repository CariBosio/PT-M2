import React, { useState } from "react";
import { Route, Router } from "react-router-dom";

import "./App.css";
import Nav from "../components/Nav.jsx";
import Cards from "../components/Cards.jsx";
import About from "../components/About";
import Contact from "../components/Contact";
import Ciudad from "../components/Ciudad";


const apiKey = "4ae2636d8dfbdc3044bede63951a019b";

function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  }
  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: Math.round(recurso.main.temp),
            name: recurso.name,
            country: recurso.sys.country,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            humidity: recurso.main.humidity,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
            timezone: recurso.timezone/3600,
          };
          setCities((oldCities) => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  function onFilter(ciudadId) {
    let ciudad = cities.filter((c) => c.id === parseInt(ciudadId));
    if (ciudad.length > 0) {
      return ciudad[0];
    } else {
      return null;
    }
  }
  return (
    <div className="App">
      <div className="contenido">
        {/* NAV */}
        {/* <Route path="/" render={() => <Nav onSearch={onSearch} />} /> */}
        <Route path="/">
          <Nav onSearch={onSearch} />
        </Route>

        {/* CARDS */}
        {/* <Route
        exact
        path="/"
        render={() => <Cards cities={cities} onClose={onClose} />}
      /> */}
        <Route exact path="/">
          <Cards cities={cities} onClose={onClose} />
        </Route>

        {/* ABOUT */}
        {/* <Route exact path="/about" component={About} /> */}

        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />

        {/* CIUDAD */}
        {/* <Ciudad /> */}
        <Route
          exact
          path="/ciudad/:ciudadId"
          render={({ match }) => (
            <Ciudad city={onFilter(match.params.ciudadId)} />
          )}
        />

        
      </div>
      <div>
        <footer>
          <p className="colorfooter">© Carina Bosio | 2022</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
