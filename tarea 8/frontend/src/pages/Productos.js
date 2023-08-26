import{BrowserRouter,Routes,Route} from "react-router-dom";
import Header from '../components/layout/Header';
import NavAdmin from '../components/layout/NavAdmin';
import Footer from '../components/layout/Footer';
import { useNavigate } from "react-router-dom";
import ProductoPages from "./ProductosPages";
import { useState } from "react";
import axios from "axios";

function Productos(){
     let navigate = useNavigate(); 
    const initialForm={
            id_p:''
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
            const response= await axios.post('http://localhost:3000/api/delete',formData)
            setSending(false);
            setMsg(response.data.message);
            if(response.data.error===false){
                setFormData(initialForm);
                 navigate('/Admin')
            }else{
               
            }
            
        }
    
    const routeChange = () =>{ 
            let path = `/AgregarProducto`; 
         navigate(path);
    }
    const route = () =>{ 
        let path = `/ModificarProducto`; 
     navigate(path);
}
return (
  <div className="App">
    <Header></Header>
    <NavAdmin/>
    <div className="app flex-row align-items-center">
    
        <button color="primary" className="px-4"
          onClick={routeChange}
            >
            Agregar Producto
          </button>
  </div>
  <div className="app flex-row align-items-center">
    
        <button color="primary" className="px-4"
          onClick={route}
            >
            Modificar Producto
          </button>
  </div>
  <div class="row">
        <div class="col-6 offset-3">
            <h4>Elija que Producto desea Eliminar</h4>
            <form action="/admin/producto/agregar" method="post" enctype="multipart/form-data" onSubmit={handleSubmit}> 
            <div class="mb-3 row">
                    <input type="number" class="form-control" value={formData.id_p} onChange={handleChange} placeholder="Id" name="id_p"/>
                </div>
                <button type="submit" class="btn btn-primary">Guardar</button>
            </form>
                    {sending ? <p>Enviando...</p>:null}
            {msg ? <p>{msg}</p>:null}
                </div>
            </div>
  <ProductoPages/>
    <Footer/>
  </div>
);
}

export default Productos;