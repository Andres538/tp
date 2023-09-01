import { useState,useEffect } from "react";
import axios from 'axios';
import Ps5item from "../components/producto/Ps5item";

const Ps5page=(props)=>{
    const [loading,setLoading]=useState(false);
    const [ps5,setPs5]=useState([]);
      useEffect(()=>{
          const cargarPs5= async()=>{
              setLoading(true);
              const response= await axios.get('http://localhost:3000/api/ps5');
              setPs5(response.data);
              setLoading(false);
  
          };
          cargarPs5();  
      },[]);
      
    return(
       
        <section className="holder">
          
          {
                  loading ?(
                      <p>Cargando...
                      </p>
                  ):(
                    ps5.map(item=><Ps5item key={item.id_p} id={item.id_p}
                        nombre={item.nombre_p} precio={item.precio} 
                        imagen={item.imagen} />

                      )
                  )
                  
              }
         </section>
          
      )
  }
  
  export default Ps5page;