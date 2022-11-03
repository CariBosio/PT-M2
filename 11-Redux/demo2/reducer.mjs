//!EL REDUCER MODIFICA EL ESTADO inicial


//Informacion de todo el estado de mi aplicación
const initialState = {
  ciudades: [],
  ciudad: {},
  pollito: true,
};

// El state de este Reducer ↓ es este ↑

//Crear el Reducer 
export default function reducer(state = initialState, action) {

    if (action.type === 'BUSCAR-CIUDADES') {
        return {
            ...state,   //copia del estado antes de modificarlo
            ciudades: action.payload  //el nuevo objeto que va a modificar el initialState en su propiedad de ciudades va a tener la informacion que viene desde le action.payload
            
}
    } else if (action.type === 'BUSCAR_UNA_CIUDAD'){
        return {
            ...state,
            ciudad: action.payload
        }
    }else{    //valor por defecto
         return state
    }
}
