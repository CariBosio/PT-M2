import React from "react";
import "./About.css";
import { FiCheck } from "react-icons/fi";

function About() {
  return (
    <div className="text">
    <hr className="raya"/>
    <p><FiCheck />
      Accedé a datos meteorológicos actuales para cualquier ubicación, incluídas
      más de 200.000 ciudades.</p>
      <br/>
     <p><FiCheck />Poné el nombre de la ciudad en el buscador y presioná buscar.</p>
      <br/>
      
      <p><FiCheck />Podés buscar más de una ciudad a la vez. </p>
      <br/>
     
      <p><FiCheck />Podés cerrar las ciudades que no quieras ver. </p>
      <br/>
     
      <p><FiCheck />Podés cambiar de grados Celsius a Fahrenheit y viceversa. </p>
      <br/>
      
      <p><FiCheck />Si entrás a una ciudad, podés ver más detalles. </p>

      <hr className="raya"/>
    </div>
  );
}

export default About;
