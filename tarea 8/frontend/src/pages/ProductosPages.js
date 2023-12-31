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
            {
                loading ?(
                    <p>Cargando...
                    </p>
                ):(
                   productos.map(item=><Producto key={item.id_p} id={item.id_p} id_s={item.id_stock}
                    nombre={item.nombre_p} stock={item.nombre_s} precio={item.precio} ingreso={item.ingreso} categoria={item.nombre_c} marca={item.nombre_m} cantidades={item.cantidades}
                    imagen={item.imagen} />

                )
                )
            }
        </section>
    );
}

export default  ProductoPages;