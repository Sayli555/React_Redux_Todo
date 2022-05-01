// import { store } from '../Redux/store';
import {addCount} from "../Redux/Counter/action";
import {useDispatch, useSelector} from "react-redux"

export const Counter=()=>{
    // const state=store.getState();

//  const dispatch=useDispatch();
 const dispatch=useDispatch()
  const counter=useSelector((store)=>store.counter.counter)


//   console.log(state)
    return(
        <div>
        
      <h3>Counter:{counter}</h3>

<button onClick={()=>{
  
  dispatch(addCount(1))
}}>Add 1</button>
    </div>
    )
    
}