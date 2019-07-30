const redux = require('redux')

const createStore = redux.createStore;

//State Inicial
const stateInicial = {
    usuarios: []
}

//Reducer
//Como parametros recibe 2, state y accion
const reducerPrincipal = (state = stateInicial, action) => {
    if(action.type === "AGREGAR_USUARIO" ) {
        return{
            ...state,
            usuarios: action.nombre
        }
    }
    if(action.type === "MOSTRAR_USUARIOS"){
        return{
            ...state
        }
    }
    return state;
}

//create store y store (contiene el state de la aplicacion)
//3 parametros: reducer, state inicial, applymiddleware
const store = createStore(reducerPrincipal);
console.log(store.getState())

//Subscribe o suscription
store.subscribe(()=>{
    console.log("algo cambio...", store.getState());
})


//Dispatch: es la forma de cambiar el state
store.dispatch({type: "AGREGAR_USUARIO", nombre: 'Christopher' });
console.log(store.getState())
store.dispatch({type: "MOSTRAR_USUARIOS"})
console.log(store.getState())