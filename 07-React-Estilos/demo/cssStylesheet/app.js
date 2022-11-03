import React from 'react';
//import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import Producto from './src/components/Product.jsx';
import OtroComponente from './src/components/OtroComponente.js';

render(<div>
    <Producto title="Prueba" price={400}/>
    <OtroComponente title="Otro" price={133}/>
    </div>, 
    document.getElementById('app'));
