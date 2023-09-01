import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";

const ProductoItems=(props)=>{
    const{key,id,id_s,nombre,precio,imagen,body,cantidades,categoria,marca,stock}=props;
    const initialForm={
        id_p:id,
        cantidades:cantidades
    }
    var button="";
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
        const response= await axios.post('http://localhost:3000/api/Venta',formData)
        setSending(false);
        setMsg(response.data.message);
            setFormData(initialForm);
            window.location.reload();
        
    }
    

    
    return(
        <div className="productos">
            <h1>{key}</h1>
            
            <img src={imagen}></img>
           <h2>{nombre}</h2> 
            <h2>{precio}</h2>
            <h2>Categoria:{categoria}</h2>
            
            <h2>Marca:{marca}</h2>
            
           <button onClick={handleSubmit} >Comprar</button> 

            <div dangerouslySetInnerHTML={{__html:
            body}}/>
            <hr/>
            
        </div>
    );
    }


export default ProductoItems;