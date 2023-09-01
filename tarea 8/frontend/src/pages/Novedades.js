import { useState,useEffect } from "react";
import axios from 'axios';
import NovedadesItems from "../components/producto/NovedadesItems";
const Novedades=(props)=>{
    const [loading,setLoading]=useState(false);
    const [novedades,setNovedades]=useState([]);
      useEffect(()=>{
          const cargarNovedades= async()=>{
              setLoading(true);
              const response= await axios.get('http://localhost:3000/api/novedades');
              setNovedades(response.data);
              setLoading(false);
  
          };
          cargarNovedades();  
      },[]);
      
    return(
       
        <section className="holder">
          <table class="table">{
                  loading ?(
                      <p>Cargando...
                      </p>
                  ):(
                    novedades.map(item=><NovedadesItems key={item.id_p} id={item.id_p}
                        nombre={item.nombre_p} precio={item.precio} 
                        imagen={item.imagen}/>

                      )
                  )
                  
              }</table>
         </section>
          
      )
  }
  
  export default Novedades;