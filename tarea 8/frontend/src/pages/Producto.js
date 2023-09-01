import{BrowserRouter,Routes,Route} from "react-router-dom";
import Header from '../components/layout/Header';
import Nav from '../components/layout/Nav';
import Footer from '../components/layout/Footer';
import { useEffect,useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ProductoItems from "../components/producto/ProductoItems";

function Producto() {
    const [loading,setLoading]=useState(false);
    const [productos,setProductos]=useState([]);
    const {id}=useParams();
    const value={id_p:id}
    useEffect(()=>{
        const cargarProductos= async()=>{
            setLoading(true);
            const response= await axios.post('http://localhost:3000/api/productobyid',value);
            setProductos(response.data);
            setLoading(false);

        };
        cargarProductos();
    },[]);
  return (
    <div className="App">
      <Header></Header>
      <Nav></Nav>
     <div>{
                  loading ?(
                      <p>Cargando...
                      </p>
                  ):(
                    productos.map(item=><ProductoItems key={item.id_p} id={item.id_p}
                        nombre={item.nombre_p} precio={item.precio} categoria={item.nombre_c} marca={item.nombre_m} cantidades={item.cantidades}
                        imagen={item.imagen}/>

                      )
                  )
                  
              }
       </div>
      <Footer/>
    </div>
  );
}

export default Producto;