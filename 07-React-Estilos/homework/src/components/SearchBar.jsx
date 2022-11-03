import React from "react";

export default function SearchBar(props) {
  // acá va tu código
  return (
    // <div>
    //   <input type="text" placeholder={"Buscar ciudad ...."} />
    //   <button onClick={()=>props.onSearch("Buscando Ciudad")}>Agregar</button>
    // </div>
    <form>
      <input placeholder="Ciudad.." />
      <input type="submit" value="Agregar" />
    </form>
  );
}