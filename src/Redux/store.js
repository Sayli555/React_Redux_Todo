import { legacy_createStore as createStore ,combineReducers} from "redux";
// import  {counterReducer } from "./reducer"

import { todosReducer } from "./Todos/reducer";
import { counterReducer } from "./Counter/reducer";
import {loginReducer} from "./Login/reducer"

const rootReducer=combineReducers({
    counter:counterReducer,
    todos:todosReducer,
    login:loginReducer

})
export const store=createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    // {counter:0,todos:[]}
    );


// store.subscribe(()=>{
    console.log("Subscribe",store.getState())
// })