import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const ModificarProducto=(props)=>{
    const navigate=useNavigate();
    const initialForm={
        id_p:'',
        nombre_p:'',
        precio:'',
        cantidades:'',
        id_categoria:'',
        id_marca:'',
        imagen:'1'
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
        const response= await axios.post('http://localhost:3000/api/ModificarProducto',formData)
        setSending(false);
        setMsg(response.data.message);
        if(response.data.error===false){
            setFormData(initialForm);
             navigate('/Admin')
        }else{
           
        }
        
    }

    return(
        <div class="container" >
    <div class="row">
        <div class="col-6 offset-3">
            <h4>Agregar un nuevo producto</h4>
            <form action="/admin/producto/agregar" method="post" enctype="multipart/form-data" onSubmit={handleSubmit}> 
            <div class="mb-3 row">
                    <input type="number" class="form-control" value={formData.id_p} onChange={handleChange} placeholder="Id" name="id_p"/>
                </div>
                <div class="mb-3 row">
                    <input type="text" class="form-control" value={formData.nombre_p} onChange={handleChange} placeholder="Nombre" name="nombre_p"/>
                </div>
                <div class="mb-3 row">
                    <input type="number" class="form-control" value={formData.precio} onChange={handleChange} placeholder="Precio" name="precio"/>
                </div>
                <div class="mb-3 row"><input  type="number" class="form-control" value={formData.cantidades} onChange={handleChange} placeholder="Cantidad" name="cantidades"/></div>
                <div class="mb-3 row">
                    <label for="categoria">Categoria:</label>
                    <input type="number" class="form-control" value={formData.id_categoria} onChange={handleChange} placeholder="Categoria" name="id_categoria"/>
                </div>
                <div class="mb-3 row">
                    <label for="Marca">Marca:</label>
                    <input type="number" class="form-control" value={formData.id_marca} onChange={handleChange} placeholder="Marca" name="id_marca"/>
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


export default ModificarProducto;