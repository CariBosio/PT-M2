//!Toda la info necesaria para que renderice nuestra App

import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav.jsx";
import Cards from "./components/Cards.jsx";

export default function App() {
  // definir estados

  const [cities, setCities] = useState([]); //declarado mi estado local
  // React.useState hay que ponerlo el día del checkpoint
  // cities=[]
  // setCities => f(que actualiza el estado)

  const apiKey = "4ae2636d8dfbdc3044bede63951a019b";

  // function onSearch(city) {
  //   fetch(
  //     `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  //   )
  //     // tarda en resolverlo, entonces cuando termines respondeme:
  //     .then((response) => response.json()) //promesa
  //     .then((response_json) => {
  //       if (response_json.main !== undefined) {
  //         //constatar que haya información
  //         const city = {
  //           name: response_json.name,
  //           min: Math.round(response_json.main.temp_min),
  //           max: Math.round(response_json.main.temp_max),
  //           id: response_json.id,
  //           img: response_json.weather[0].icon,
  //           wind: response_json.wind.speed,
  //           clouds: response_json.clouds.all,
  //           temp: response_json.main.temp,
  //           longitude: response_json.coord.lon,
  //           latitude: response_json.coord.lat,
  //         };
  //         setCities((oldCities) => [...oldCities, city]); //me quedo con ciudad anterior y le anexo city
  //       } else {
  //         alert("Ciudad no encontrada");
  //       }
  //     })
  //     .catch((e) => console.log(e)); //si no responde nada o tira un error
  // }

  function onSearch(city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const city = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };
          setCities((oldCities) => [...oldCities, city]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }

  function onClose(id) {
    //recibe un id para saber exactamente cual queremos borrar
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  }

  //!  Renderizar componentes
  return (
    <div className="App">
      {/* Tu código acá: */}

      <Nav onSearch={onSearch} />
      {/* ↑ le paso la función, no la invocación */}
      {/* ya tengo el Nav en pantalla */}
      <Cards cities={cities} onClose={onClose} />
    </div>
  );
}
