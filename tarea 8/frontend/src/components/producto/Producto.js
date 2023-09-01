import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
const Producto=(props)=>{
    
    const{key,id,nombre,precio,imagen,body,ingreso,categoria,marca,cantidades}=props;
   
    const initialForm={
            id_p:id
        }
        console.log(id);
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
            const response= await axios.post('http://localhost:3000/api/delete',formData)
            setSending(false);
            setMsg(response.data.message);
                setFormData(initialForm);
                window.location.reload();
            
        }
    return(

        <div className="productos">
            <tr>
            <td>{key}</td>
            <td>{id}</td>
            <td>{nombre}</td>
            <td>{precio}</td>
            <td>{ingreso}</td>
            <td>{categoria}</td>
            <td>{marca}</td>
            <td>{cantidades}</td>

            <td><img src={imagen}></img></td>
            <td><Link to={'/Modificarproducto/'+id}>Modificar</Link></td>
            <td><Link onClick={handleSubmit}>Eliminar</Link></td>
            <div dangerouslySetInnerHTML={{__html:
            body}}/>
            <hr/></tr>
        </div>
    );
    }


export default Producto;