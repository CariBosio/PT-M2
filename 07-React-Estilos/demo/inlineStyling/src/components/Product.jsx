import React from 'react';


//se definen estilos como si fuesen objetos
const divStyle = {
  margin: '40px',  
  border: '5px solid pink',
};
const pStyle = {
  fontSize: '15px',   //font-size  no se usa más
  textAlign: 'center',  //text-align  no se usa más
};

function Product(props) {
  return (
    <div style={divStyle}>   //a nuestros tags le pasamos una propiedad que se llama style y le pasamos el objeto recién creado más arriba
      <h3>{props.title}</h3>
      <p style={pStyle}>{props.price}</p>
    </div>
  );
}

export default Product;
