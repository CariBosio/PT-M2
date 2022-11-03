const initialState = {
    producto: {},
     };
  
  // El state de este Reducer ↓ es este ↑
  
  //Crear el Reducer 
  export default function reducerProductos(state = initialState, action) {
  
      if (action.type === 'BUSCAR_UN_PRODUCTO') {
          return {
              ...state,   //copia del estado antes de modificarlo
              producto: action.payload  //el nuevo objeto que va a modificar el initialState en su propiedad de ciudades va a tener la informacion que viene desde le action.payload
              
  }
            }else{    //valor por defecto
           return state
      }
  }
  