// !HOMEWORK DOM - M2
// Crear un array vacío llamado 'toDoItems'
// Tu codigo acá:

let toDoItems = [];


// En la página 'index.html' hay un elemento span cuyo texto es 'Aplicación creada por:'.
// Usando querySelector seleccionar dicho span por su id ('createdBy') y luego usando innerHTML
// agregar tu nombre al final del texto actual. Ej: 'Aplicación creada por Franco'
// Tu código acá:

let span = document.querySelector('#createdBy');
span.innerHTML = span.innerHTML + ' Carina Bosio';

//document.querySelector('#createBy').innerHTML += 'Carina Bosio';    //otra forma


// Crear una clase denominada 'ToDo' cuyo constructor debe recibir un único parámetro del tipo string
// con el nombre 'description' que será justamente la descripción del ToDo.
// Agregar dos propiedades a la clase:
// 1) 'description' : debe ser igual a la descripción pasada como parámetro al constructor
// 2) 'complete'    : debe setearse en false
// Ayuda: usar 'this' en el constructor

function ToDo(description) {
    // Tu código acá:
    this.description = description;
    this.complete = false;

}

// Agregar un método denominado 'completeToDo' al prototipo de la clase ToDo
// No requiere ningún argumento
// Debe setear el atributo 'complete' del ToDo en true

// Tu código acá:
ToDo.prototype.completeToDo = function() {
    this.complete = !this.complete; //en vez de ponerle TRUE, le pongo lo opuesto a lo que tenés en ese momento
}

// Agregar dos parámetros a la función 'buildToDo':
//    1) Un objeto de la clase ToDo
//    2) Index numérico
//
// La función debe realizar lo siguiente:
//    1) Crear un elemento 'div' y asignárselo a una variable denominada 'toDoShell'
//    2) Asignarle a 'toDoShell' la clase 'toDoShell'
//    3) Crear un elemento 'span' y asignárselo a una variable denominada 'toDoText'
//    4) Utilizando el objeto toDo pasado como argumento, setear el 'toDoText' innerHTML
//       asignándole el valor de la propiedad 'description' del objeto ToDo.
//    5) Asignarle como id del 'toDoText' el valor 'index' recibido como argumento
//    6) En función del atributo 'complete' del objeto ToDo recibido como argumento:
//          - Si es true: asignarle a 'toDoText' la clase 'completeText'
//          - Si es false: no asignarle ninguna clase
//    7) Agregar 'toDoText' como hijo de 'toDoShell'
//    8) Devolver la variable toDoShell


function buildToDo(todo, index) {
    // Tu código acá:
    var toDoShell = document.createElement("div");
    toDoShell.className = "toDoShell";
    var toDoText = document.createElement("span");

    var checkbox = document.createElement("input"); //Crear un checkboxbox en la función 'buildToDo'  //creo un input
    checkbox.setAttribute('type', 'checkbox'); // el input creado se le asigna de tipo checkboxbox
    //checkbox.id = index
    checkbox.setAttribute('id', index); //seteo el id //Asignarle como id a dicho checkbox el valor del index y quitar el id del index de toDoText
    checkbox.addEventListener('click', completeToDo); //Agregarle al checkbox el 'click' event listener de completeToDo y quitárle el event listener a toDoText
    checkbox.className = "completeCheckbox"; //Asignarle la clase 'completeCheckbox' al checkbox

    // todo.description.innerHTML = toDoText;
    toDoText.innerHTML = todo.description;
    //toDoText.id = index;


    if (todo.complete) {
        toDoText.className = 'completeText';
        checkbox.checked = true; //la función buildToDo, si es true, setear el atributo 'checked' en true en el checkbox
        //la función buildToDo, si es true, setear el atributo 'checked' en true en el checkbox

        // todo.complete && (toDoText.className = 'completeText');  //otra forma , si lo que está a la izq de &&, entonces hago lo que está a la derecha de &&
    }

    toDoShell.appendChild(toDoText);
    //<div class = 'toDoShell'>
    // <span id = index class = 'completeText'>Comprar tomate</span>
    // </div>

    toDoShell.appendChild(checkbox); //Agregar el checkboxbox sobre el elemento 'toDoShell'

    //toDoText.addEventListener('click', completeToDo);

    //checkbox.id = index

    return toDoShell;
}

// La función 'buildToDos' debe crear un array de objetos toDo y devolverlo
// Recibirá como parámetro un array de objetos ToDo
// Utilizar el método map usando la función previamente creada ('buildToDo')
// Devolver el nuevo array

function buildToDos(toDos) {
    //Tu código acá:

    // toDos es un array de objetos toDo   toDos = [{description, complete}, {description, complete}, {description, complete}]

    // var arr = toDos.map(function(todo, x) { //todo ->cada elemento del arreglo
    //     return buildToDo(todo, x)
    // })
    // return arr;

    return toDos.map(buildToDo); // por cada elemento (buildToDo) le va a pasar el (todo, index)

}


// La función 'displayToDos' se va a encargar de que se vean los toDo's en pantalla
//  1) Seleccionr el elemento cuyo id es 'toDoContainer' y almacenarlo en una variable denominada 'toDoContainer'
//  2) Setear el innerHTML de 'toDoContainer' como un string vacio ("")
//  3) Llamar a la función previemante creada 'buildToDos' pasándole como argumento el array toDoItems
//  4) Iterar sobre el resultado devuelto por la función 'buildToDos' e ir agregndo cada elemento a 'toDoContainer'
//  5) Al final de este archivo, antes de la línea que dice "NO CAMBIES NADA DE ACÁ PARA ABAJO" escribe una
//     línea para hacer el llamado a esta funcion (displayToDos)
//  6) Abrir o en el caso de ya tenerlo abierto, recargar, la página

function displayToDos() {
    // Tu código acá:
    var toDoContainer = document.querySelector('#toDoContainer');
    toDoContainer.innerHTML = ' ';
    let build = buildToDos(toDoItems);
    for (let i = 0; i < build.length; i++) {
        toDoContainer.appendChild(build[i]);
    }
}


// La función 'addToDo' agregará un nuevo ToDo al array 'toDoItems'
// [NOTA: Algunas cuestiones a tener en cuenta sobre el elemento 'input' de HTML (Ya que 'toDoInput' es un input)
// Todos los elementos input tienen una propiedad llamada 'value' que nos permite acceder al texto que se encuentre
// actualmente escrito dentro del input]
//  1) Crear un nuevo ToDo usando la clase ToDo y pasándole el valor del input 'toDoInput' como parámetro
//  2) Agregar el objeto ToDo recién creado al array toDoItems
//  3) Setear el valor del input toDoInput como un string vacio ("") (Esto se realiza para que en la vista se borre lo que se encontraba escrito)
//  4) Llamar a la función displayToDos para que se actualicen los toDos mostrados en pantalla

function addToDo() {
    // Tu código acá:
    let input = document.querySelector('#toDoInput'); //ya tengo el input
    if (input.value != ' ') {
        let toDo = new ToDo(input.value); //toDo = {description: input.value, complete: false }
        toDoItems.push(toDo); //agregué un nuevo toDo al array toDoItem, lo actualicé
        input.value = (' ') //para borrar lo que en la lista estaba escriton input vacío
        displayToDos();
    }
}

// Agregar un 'Event Listener' para que cada vez que el botón 'AGREGAR' sea clickeado
// se ejecute la función 'addToDo'
//   1) Seleccionar el elemento cuyo id es 'addButton'
//   2) Agregarle un 'click' event listener, pasándole la función 'addToDo' como callback

// Tu código acá:
let add = document.querySelector('#addButton');
add.addEventListener('click', addToDo); //acción-reacción //no le paso la invocación a la función, sino la función

// La función completeToDo se va a ejecutar cuando queramos completar un todo
// [NOTA: Algunas cuestiones a tener en cuenta
// Todo Event Listener recibe como parámetro el objeto 'event' conteniendo un montón de información que incluye
// el tipo del evento, que elemento fue el que lo llamó, los valores de dicho elemento, etc.
// En este paso vamos a utilizarlo para encontrar el index del item que disparó el evento (Esta parte ya se
// encuentra desarrollada pero está comentada dentro de la función por lo que va a ser necesario que la descomenten)]
//   1) Utilizando el index suministrdo, llamar a 'completeToDo' (Recuerden que habíamos creado dcho método en el
//      prototipo de la clase ToDo) sobre el elemento correspondiente del array toDoItems
//   2) Llamar a displayToDos para actualizar los elementos que se van a mostrar en pantalla
//   3) En la función 'buildToDo' agregar un 'click' event listener al elemento 'toDoText', pasándole
//      esta función como callback

function completeToDo(event) {
    // DESCOMENTAR LA SIGUIENTE LINEA
    const index = event.target.id; //encontrar el index del item que disparó el evento
    //evento = click, event.target = span, event.target.id = index buildTodo o index del span

    // Tu código acá:
    toDoItems[index].completeToDo(); //pasaba todo lo que estaba complete en false a true
    displayToDos();

}



// Una vez que llegaste a este punto verificá que todos los tests pasen


// **********************************************EXTRA CREDITOS:********************************************** //

/*    Investigá sobre el tipo 'checkboxbox' del elemento input y realizar lo siguiente en la función 'buildToDo':
        a) Crear un checkboxbox en la función 'buildToDo'
        b) Asignarle como id a dicho checkboxbox el valor del index y quitar el id del index de toDoText
        c) Agregarle al checkboxbox el 'click' event listener de completeToDo y quitárle el event listener a toDoText
        d) Asignarle la clase 'completecheckboxbox' al checkboxbox
        e) Dentro del bloque 'if' de la función buildToDo, si es true, setear el atributo 'checkboxed' en true en el checkboxbox
        f) Agregar el checkboxbox sobre el elemento 'toDoShell'
*/
// ********************************************** ----------- ********************************************** //


// Acá debes insertar la llamada a 'displayToDos'
displayToDos();

// ---------------------------- NO CAMBIES NADA DE ACÁ PARA ABAJO ----------------------------- //
if (typeof module !== 'undefined') {
    module.exports = {
        toDoItems: toDoItems,
        ToDo: ToDo,
        buildToDos: buildToDos,
        buildToDo: buildToDo,
        completeToDo: completeToDo,
        displayToDos: displayToDos,
        addToDo: addToDo
    };
}