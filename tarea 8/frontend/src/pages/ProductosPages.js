import { useState,useEffect } from "react";
import axios from 'axios';
import Producto from "../components/producto/Producto";
const ProductoPages=(props)=>{
    const [loading,setLoading]=useState(false);
    const [productos,setProductos]=useState([]);
    useEffect(()=>{
        const cargarProducto= async()=>{
            setLoading(true);
            const response= await axios.get('http://localhost:3000/api/productos');
            setProductos(response.data);
            setLoading(false);

        };
        cargarProducto();
    },[]);
    
    return(
        <section className="holder">
            <h2>Productos</h2>
            
            <thead>
                <tr class="table-dark">
                <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Ingreso</th>
                    <th scope="col">Categoria</th>
                    <th scope="col">Marca</th>
                    <th scope="col">Cantidades</th>
                    <th scope="col">Imagen</th>
                    <th class="text-end">Acciones</th>
                </tr>
            </thead>  
            
            {
                loading ?(
                    <p>Cargando...
                    </p>
                ):(
                    productos.map(item=><Producto key={item.id_p} id={item.id_p}
                        nombre={item.nombre_p} precio={item.precio} ingreso={item.ingreso} categoria={item.nombre_c} marca={item.nombre_m} cantidades={item.cantidades}
                        imagen={item.imagen}/>

                    )
                )
            }
           
        </section>
    );
}

export default  ProductoPages;