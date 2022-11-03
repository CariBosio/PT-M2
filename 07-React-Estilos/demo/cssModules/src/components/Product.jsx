import React from 'react';
import s from  './Product.css'; //s es un {}, donde adentro van a estar definidos los estilos


function Product(props) {  //es un componente
  console.log('esto es s:', s); // s es lo que se importó de Product.css
  return (
    <div className={`${s.producto} ${s.hola}`}> 
    {/* comillas invertidas, $ y {} para pasar más de una clase */}
      <h3 className={s.hola}>{props.title}</h3>
      <p>{props.price}</p>
    </div>
  );
}

export default Product;
