import {ADD_TODO} from "./action";


const init={todos:[]}
export const todosReducer=(store=init, {type,payload})=>{
    switch(type){
        // case ADD_COUNT:
        //     return {...store,counter:store.counter+payload}

        case ADD_TODO:
            return {...store,todos:payload}    
            
        default:
            return store;
        }

}