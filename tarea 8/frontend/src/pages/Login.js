import { useNavigate } from 'react-router-dom';
import React,{ useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Login=(props)=>{ 
  const navigate=useNavigate();
  const initialForm={
    mail:'',
    password:''
}
const [sending,setSending]=useState(false);
const [msg,setMsg]=useState('');
const [formData,setFormData]=useState(initialForm);
const handleChange=e =>{
    const {name,value}=e.target;
    setFormData(oldData =>({
        ...oldData,
        [name]:value
    }));
}
const handleSubmit=async e=>{
    e.preventDefault();
    setMsg('');
    setSending(true)
    const response= await axios.post('http://localhost:3000/api/Login',formData)
    setSending(false);
    setMsg(response.data.message);
    if(response.data.error===false){
        setFormData(initialForm);
        navigate('/Cliente')
    }else{
       
    }
    
}
 
  return(
     
    <main class="holder">
         <form onSubmit={handleSubmit}>
          <input type="text" id="inputUser" placeholder="Mail" value={formData.mail} onChange={handleChange} name="mail"/>
          <input type="password" id="inputPassword" placeholder="password" value={formData.password} onChange={handleChange} name="password"></input>
          <button type="submit">Ingresar</button>
         </form>
         <ul>
         <li><NavLink to="/Registro">Registrarse</NavLink></li>
         
            </ul>
    </main>
    )
}
 
export default Login;