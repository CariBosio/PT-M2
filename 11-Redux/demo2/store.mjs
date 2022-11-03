import redux, { combineReducers } from 'redux';
import reducer from './reducer.mjs';
// import { legacy_createStore as createStore} from 'redux'
import reducerProductos from "./reducerProductos.mjs";




//!Crear el Store???????
const store = redux.createStore(redux.combineReducers([reducer, reducerProductos]));    //aca envío solo la definicion del reducer, no el resultado
// const store = redux.configureStore(reducer);    //aca envío solo la definicion del reducer, no el resultado

// console.log(store)




console.log(store.getState())   
/*me debería devolver el estado actual de mi aplicacion : {ciudades: [], ciudad: {},
pollito: true}*/

console.log(store.getState())



export default store;
