import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Counter from './components/Counter'
import counter from './reducers';

//Esta linea instancia nuestro store central de Redux
//La funcion 'createStore' recibe el reducer
 