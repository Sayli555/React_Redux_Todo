import { LOGIN } from "./action";
const init={user:null};

export const loginReducer=(store=init,{type,payload})=>{
    switch(type){
        case LOGIN:
            localStorage.setItem("userloginDetails",JSON.stringify(payload))
            return {...store,user:payload}
        default:
            return store;    
    }
}