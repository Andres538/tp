import { useState } from "react";
import axios from 'axios';
const Contactenos=(props)=>{
    const initialForm={
        nombre:'',
        email:'',
        mensaje:''
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
        const response= await axios.post('http://localhost:3000/api/contacto',formData)
        setSending(false);
        setMsg(response.data.message);
        if(response.data.error===false){
            setFormData(initialForm)
        }
    }

    
    return(
        <main class="holder contacto">
        
        <div>
            <h2>Contactenos</h2>
            <form action="/contacto" method="post" class="Formulario" onSubmit={handleSubmit}>
                <p>
                    <label for="nombre">Nombre</label>
                    <input type="text" name="nombre" value={formData.nombre} onChange={handleChange}/>
                </p>
                <p>
                    <label for="email">Email</label>
                    <input type="mail" name="email" value={formData.email} onChange={handleChange}/>
                </p>
                <p>
                    <label for="mensajes">Mensaje</label>
                    <textarea name="mensaje" value={formData.mensaje}  onChange={handleChange}></textarea>
                </p>
                <input type="submit"/>
            </form>
            {sending ? <p>Enviando...</p>:null}
            {msg ? <p>{msg}</p>:null}
        </div>
        <div>
            <h2>Nuestros datos</h2>
            <p>Instagram:</p>
            <p>Numero de telefono:</p>
            <p>Gmail:</p>
            <p>Facebook:</p>
        </div>
   </main>
    )
}

export default Contactenos;