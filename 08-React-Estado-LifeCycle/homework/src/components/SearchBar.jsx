import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault(); //para que haga lo que yo quiera
        onSearch(city);
        setCity(""); //deja en limpio el input
      }}
    >
      <input
        type="text"
        placeholder="Ciudad..."
        value={city} //el valor que tiene este input es city
        onChange={(e) => setCity(e.target.value)} //ante cada cambio, quiero tomar el valor del imput
      />
      <input type="submit" value="Agregar" />
    </form>
  );
}
