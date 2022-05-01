import { getDefaultNormalizer } from '@testing-library/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addtodos } from '../Redux/Todos/action';
// import { store } from '../Redux/store';

const Todos = () => {
    const todos=useSelector((store)=>store.todos.todos);
    const dispatch=useDispatch();
    const [text,setText]=useState("");

    const handleAdd=()=>{
        // dispatch(
        //     addtodos({
        //         title:text,
        //         status:false,
        //     })
        // )

        const payload={
          title:text,
         status:false,
        };
        fetch("http://localhost:8080/todos",{
          body:JSON.stringify(payload),
          headers:{
            "content-type":"application/json",
          },
          method:"POST",
        }).then(()=>setText("")). then(getData);
    }


    useEffect(()=>{
      getData()
    },[]);

    const getData=()=>{
      fetch("http://localhost:8080/todos").then(x => x.json()).then(data=>{
        dispatch(addtodos(data))
      })
    }
  return (
    <div>
      <input type="text" onChange={(e)=>setText(e.target.value)}/>
      <button onClick={handleAdd}>Add Todos</button>
      {todos.map((t)=>(
          <div>{t.title}</div>
      ))}
    </div>
  )
}

export default Todos
