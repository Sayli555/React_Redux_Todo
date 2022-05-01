export const ADD_COUNT="ADD_COUNT";
// export const ADD_TODO="ADD-TODO"



export const addCount=(data)=>{
    return{
        type:ADD_COUNT,
        payload:data
    }  
}


// export const addtodos=(data)=>{
//     return{
//         type:ADD_TODO,
//         payload:data
//     }  
// }