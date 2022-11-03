import React from 'react';
import './Product.css'; // global para todo

function Product(props) {
  return (
    <div className="producto"> //todo el div va a ser white en Product.css
      <h3>{props.title}</h3>  //background color en Product.css
      <p>{props.price}</p>
    </div>
  );
}

export default Product;
