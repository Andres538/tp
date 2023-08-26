import { useState,useEffect } from "react";
import axios from 'axios';
import DestacadosItems from "../components/producto/DestacadosItems";
const Destacados=(props)=>{
    const [loading,setLoading]=useState(false);
    const [destacados,setDestacados]=useState([]);
      useEffect(()=>{
          const cargarDestacados= async()=>{
              setLoading(true);
              const response= await axios.get('http://localhost:3000/api/destacados');
              setDestacados(response.data);
              setLoading(false);
  
          };
          cargarDestacados();  
      },[]);
      
    return(
       
        <section className="holder">
          <table class="table">{
                  loading ?(
                      <p>Cargando...
                      </p>
                  ):(
                    destacados.map(item=><DestacadosItems key={item.id_p}
                        nombre={item.nombre_p} precio={item.precio} 
                        imagen={item.imagen}/>)
                  )
                  
              }</table>
         </section>
          
      )
  }

  export default Destacados;