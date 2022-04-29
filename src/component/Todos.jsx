import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addTodo } from '../Redux/action';
import "./Todos.css"

import {store} from "../Redux/store";



const Todos = () => {
const todoData=useSelector((store)=>store.todos);
const dispatch=useDispatch();
const [text,setText]=useState([])

useEffect(()=>{
    getData()
},[])

const getData=()=>{
   axios.get("http://localhost:3001/todoData").then(({data})=>{
       dispatch(addTodo(data));
       console.log("data,",data)
   }) 
}

const postData=()=>{
    axios.post("http://localhost:3001/todoData",{title:text,status:"incomplited"}).then(()=>{
        getData()
    })
}

const patchData=(id,status)=>{
  if(status==="incomplited"){
    status="complited"
  }
  else{
    status="incomplited"
  }
  axios.patch(`http://localhost:3001/todoData/${id}`,{status}).then(()=>{
    getData()
  })
}

const deleteTodo=(id)=>{
  const remove=todoData.filter((todo)=>{
    return (todo.id!==id)});
    axios.delete(`http://localhost:3001/todoData/${id}`).then(()=>{
      getData();
    })
    dispatch(addTodo(remove))
}

console.log("todos",todoData)


  return (
    <div className='mainDiv'>
      <input type="text" onChange={(e)=>setText(e.target.value)}  />
      <button onClick={postData} >ADD TODO</button>
      {todoData.map((e)=>{
        return (
          <div className='Todomain' key={e.id}>
          <Link to={`/todos/${e.id}`} className="link">{e.title} </Link>
          <span className='title'>{e.status}</span>
          <button onClick={()=>{patchData(e.id,e.status)}}>Status</button>
          <button onClick={(()=>{deleteTodo(e.id)})}>Delete</button>
        </div>
        )
         
        
      })}
    </div>
  )
}

export default Todos
