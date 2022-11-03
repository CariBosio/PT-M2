import React from 'react';
import styled from 'styled-components';

const Producto = styled.div`  //pasó a ser un div
  color: salmon;
  font-size: 20px;
  & h3 {      //si sos un h3 extendé todo lo anterior pero agregale springGreen
    background-color: SpringGreen; 
  }
`;

const Titulo = styled.h3`
  font-size: 30px;
  &:hover {
    color: grey;
  }
`;

function Product(props) {
  
  return (
    //<Producto style={color:salmon, font-size: 20px}
    <Producto>
      {/* <h3 style={font-size: 30px}></h3> */}
      <Titulo>{props.title}</Titulo>
      <p>{props.price}</p>
    </Producto>
  );
}

export default Product;
