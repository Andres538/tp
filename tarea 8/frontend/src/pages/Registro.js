import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Registro=(props)=>{
    const navigate=useNavigate();
    const initialForm={
        nombre_cl:'',
        mail:'',
        contraseña:'',
        telefono:'',
        direccion:'',
        numero_de_tarjeta:''
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
        const response= await axios.post('http://localhost:3000/api/Registro',formData)
        setSending(false);
        setMsg(response.data.message);
        if(response.data.error===false){
            setFormData(initialForm);
             navigate('/')
        }else{
           
        }
        
    }

    
    return(
                <div class="container">
            <div class="row">
                <div class="col-6 offset-3">
                    <h4>Crear Cuenta</h4>
                    <form action="/Registro" method="post" onSubmit={handleSubmit}>
                        <div class="mb-3 row">
                            <input type="text" class="form-control" placeholder="Nombre" value={formData.nombre_cl} onChange={handleChange} name="nombre_cl"/>
                        </div>
                        <div class="mb-3 row">
                            <input type="text" class="form-control" placeholder="Mail"  value={formData.mail} onChange={handleChange} name="mail"/>
                        </div>
                        <div class="mb-3 row"><input  type="text" class="form-control" placeholder="Contraseña" name="contraseña"  value={formData.contraseña} onChange={handleChange}/></div>
                        <div class="mb-3 row">
                            <input type="number"  class="form-control" placeholder="Telefono" name="telefono"  value={formData.telefono} onChange={handleChange}/>
                        </div>
                        <div class="mb-3 row">
                            <input type="text" class="form-control" placeholder="Direccion" name="direccion"  value={formData.direccion} onChange={handleChange}/>
                        </div>
                        <div class="mb-3 row">
                            <input type="number" class="form-control" placeholder="numero de tarjeta" name="numero_de_tarjeta"  value={formData.numero_de_tarjeta} onChange={handleChange}/>
                        </div>
                        <button type="submit" class="btn btn-primary">Guardar</button>
                    </form>
                    {sending ? <p>Enviando...</p>:null}
            {msg ? <p>{msg}</p>:null}
                </div>
            </div>
        </div>

    )
}

export default Registro;