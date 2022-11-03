import React from 'react';
import './otroCSS.css'; // global para todo

function OtroComponente(props) {
  return (
    <div className="producto"> //color salmón y background black en otroCSS.css
      <h3>{props.title}</h3> //background rojo en otroCSS.css
      <p>{props.price}</p>
    </div>
  );
}

export default OtroComponente;
