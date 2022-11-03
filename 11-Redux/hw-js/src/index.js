const { createStore, applyMiddleware } = require ('redux');
const contador = require ('./reducer');
const {incremento, decremento, incrementoImpar, incrementoAsync} = require ('./actions')


//!En esta linea creamos nuestro Store. Pasandole como parámetro nuestro Reducer

// var store = createStore(contador);  //debo generar el Reducer

//!Diego
var store = createStore(contador, applyMiddleware());  //debo generar el Reducer

//Obtenemos el elemento con el id 'valor'

var valor = document.getElementById('valor');


//Esta funcion nos va a servir para actualizar nuestro DOM con el valor que tengamos en nuestro Store.
//En el primer render y cada vez que nos subscribamos al Store.
//Utilizamos el elemento obtenido arriba para mostrar el State.

function renderContador() {

//Obtenemos la propiedad 'contador' de nuestro store: (capturamos el estado de contador)
let {contador} = store.getState();    //me devuelve todo el estado inicial de mi store
console.log(contador)

//seteamos el numero obtenido como texto dentro del elemento con id 'valor':
valor.innerHTML = contador;

//!Para que no de numeros negativos
// if(contador <= 0) valor.innerHTML = 0
// else valor.innerHTML = contador

}


//Ejecutamos la funcion 'renderContador':
renderContador()

//Nos subscribimos al store pasándole la misma función. Así cada vez que llegue una acción, ejecutamos la función:

store.subscribe(renderContador);  

//lo que yo te mando acá ↑, es la funcion que se va a ejecutar siempre que se despache una accion 

//Por último, utilizamos los botones de nuestro HTML para cada vez que hagamos click,
// hagan un dispatch al store de la acción correspondiente:

//!Camilo
// document.querySelector('#incremento').addEventListener('click', function(){
//   //que quiero hacer cuando se de click en incremento????  llamar
//   store.dispatch(incremento())
// })

//!Diego

document.getElementById('incremento').onclick = () => 
store.dispatch(incremento());

//!Camilo

//   document.querySelector('#decremento').addEventListener('click', function(){
//     let {contador} = store.getState()
//     if(contador > 0) store.dispatch(decremento(1))
//  })

//!Diego

document.getElementById('decremento').onclick = () => 
store.dispatch(decremento());

//!Camilo

// document.querySelector('#incrementoImpar').addEventListener('click', function(){
//   store.dispatch(incrementoImpar())
// })

//!Diego

document.getElementById('incrementoImpar').onclick = () => 
store.dispatch(incrementoImpar());

//!Camilo

// document.querySelector('#incrementoAsync').addEventListener('click', function(){
//   store.dispatch(incrementoAsync())
// })

//!Diego
document.getElementById('incrementoAsync').onclick = () => 
store.dispatch(incrementoAsync());







