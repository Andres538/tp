import { useState,useEffect } from "react";
import axios from 'axios';
import Ventas from "../components/producto/Ventas";
const ProductoPages=(props)=>{
    const [loading,setLoading]=useState(false);
    const [productos,setProductos]=useState([]);
    useEffect(()=>{
        const cargarProducto= async()=>{
            setLoading(true);
            const response= await axios.get('http://localhost:3000/api/ListaVenta');
            setProductos(response.data);
            setLoading(false);

        };
        cargarProducto();
    },[]);
    
    return(
        <section className="holder">
            <h2>Ventas</h2>
            {
                loading ?(
                    <p>Cargando...
                    </p>
                ):(
                   productos.map(item=><Ventas key={item.id_v} id={item.id_v}
                    nombre={item.nombre_cl} nombre_p={item.nombre_p}/>

                )
                )
            }
        </section>
    );
}

export default  ProductoPages;