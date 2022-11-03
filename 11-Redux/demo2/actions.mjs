export function buscarCiudades() {
    
//la informacion se le pide a la Api en las actions
const resultadoInfoApi = [      //contiene la información
        { nombre: "cartago" },
        { nombre: "bogota" },
        { nombre: "cali" },
        { nombre: "medellin" }]


    return {
      type: "BUSCAR_CIUDADES", //tipo de accion que se va a despachar
      payload: resultadoInfoApi
    };
}

//Más acciones


//Funcion que crea la accion
export function buscarUnaCiudad(habitantes) {
    //accion propiamente dicha
    return {
        type: "BUSCAR_UNA_CIUDAD",            //tipo de accion que se va a despachar
        payload: { nombre: medellin, temp: 25, habitantes}
    }
}

// ↑ Esta accion va a para al reducer


export function buscarProducto(nombre) {
    //accion propiamente dicha
    return {
        type: "BUSCAR_UN_PRODUCTO",            //tipo de accion que se va a despachar
        payload: { nombre }
    }
}