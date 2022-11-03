import React from "react";
import "./Cards.css";

import Card from "./Card.jsx";

export default function Cards({ cities, onClose }) {

  return (
    <div className="cards">
      {cities.map((c) => (
        <Card
          key={c.id}
          temp={c.temp}
          max={c.max}
          min={c.min}
          name={c.name}
          country={c.country}
          humidity={c.humidity}
          img={c.img}
          onClose={() => onClose(c.id)}
          id={c.id}
          timezone={c.timezone}
        />
      ))}
    </div>
  );
}
