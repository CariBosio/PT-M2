import store from "../store.mjs";
import {buscarCiudades} from '../actions.mjs'


console.log(store.getState())

store.dispatch(buscarCiudades())   //invoco la funcion buscarCiudades y obtengo el resultado ()

console.log(store.getState())