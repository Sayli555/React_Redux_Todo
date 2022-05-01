import React, { useState } from 'react';


const Login = () => {

    const [userData,setUserData]=useState({
        name:'',
        password:"",      
    });
    const handleChange=(event)=>{
        let {value,name}=event.target;
        setUserData({...userData,[name]:value});
    }
  return (
    <div>
      <form>
          <h1>Login</h1>
          <lable>name</lable>
          <input 
          type="text"
          name="name"
          className='name'
          onChange={handleChange}
          value={}
          required
          />
          <br/>
          <label>Password</label>
          <input 
          type="text"
          name="password"
          className='password'
          onChange={handleChange}
          value={}
          required
          />
          <br/>
          <input type="submit" className='submitLoginForm'/>
      </form>
    </div>
  )
}

export default Login
