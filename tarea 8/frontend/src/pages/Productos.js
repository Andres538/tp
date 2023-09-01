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
    const routeChange = () =>{ 
            let path = `/AgregarProducto`; 
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
  <ProductoPages/>
    <Footer/>
  </div>
);
}

export default Productos;