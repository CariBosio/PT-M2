import store from "../store.mjs";
import {buscarUnaCiudad, buscarProducto} from '../actions.mjs'


console.log(store.getState())

store.dispatch(buscarUnaCiudad(5000))   //invoco la funcion buscarCiudades y obtengo el resultado ()
store.dispatch(buscarProducto('producto 1'))   //invoco la funcion buscarCiudades y obtengo el resultado ()

console.log(store.getState()['0'])