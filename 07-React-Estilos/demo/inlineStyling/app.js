import React from 'react';
import { render } from 'react-dom';
import Producto from './src/components/Product.jsx';
import OtroComponente from './src/components/OtroComponente.jsx';

render(
<div>
    <Producto title="Prueba" price={400}/>
    <OtroComponente title="Prueba 2" price={200}/>

    </div>, document.getElementById('app'));
