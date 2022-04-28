var traverseDomAndCollectElements = function(matchFunc, startEl) {
    var resultSet = [];

    if (typeof startEl === "undefined") {
        startEl = document.body;
    }

    // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
    // usa matchFunc para identificar elementos que matchien

    // TU CÓDIGO AQUÍ

    //arrancamos desde el nodo root y en el html root es el body, entonces mi primer elemento es el body

    if (matchFunc(startEl)) resultSet.push(startEl);
    // ↑ caso base de una recursión

    //segundo caso es que el body tenga hijos

    for (var child of startEl.children) { //me va a ir dando cada uno de los hijos del elemento padre // 
        // ↑ del conjunto de elementos children voy sacando de a un elemento

        resultSet = resultSet.concat(traverseDomAndCollectElements(matchFunc, child)); //esto me devuelve un array
        // ↑ ahora va a ser el padre más los hijos
        //mientras siga habiendo elementos que tengan hijos, sigo haciendo la recursión
        // con sprite operation
        //resultSet = [...resultSet, ...traverseDomAndCollectElements(matchFunc, el)];
    }

    return resultSet;
};







// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
    // tu código aquí
    if (selector[0] === '#') return 'id';
    if (selector[0] === '.') return 'class';
    if (selector.includes('.')) return 'tag.class';
    //otra opción
    //if (selector.split('.').length > 1) return 'tag.class';

    return 'tag';
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
    var selectorType = selectorTypeMatcher(selector);
    var matchFunction;
    if (selectorType === "id") {
        matchFunction = (el) => `#${el.id}` === selector;

    } else if (selectorType === "class") {
        matchFunction = (el) => el.classList.contains(selector.substring(1));


    } else if (selectorType === "tag.class") {
        matchFunction = (el) => {
            const [tag, className] = selector.split('.'); //destructuring de un array //caracter de corte del split es el .(punto)
            return (
                el.classList.contains(className) &&
                el.tagName.toLowerCase() === tag.toLowerCase()
            ); //antes de && actúa como si fuese un if
        };

    } else if (selectorType === "tag") {
        matchFunction = (el) => el.tagName.toLowerCase() === selector.toLowerCase(); //devuelve el valor en minúsculas de la cadena que realiza la llamada.

    }

    return matchFunction;
};

var $ = function(selector) {
    var elements;
    var selectorMatchFunc = matchFunctionMaker(selector);
    elements = traverseDomAndCollectElements(selectorMatchFunc);
    return elements;
};