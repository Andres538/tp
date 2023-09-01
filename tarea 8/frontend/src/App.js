import logo from './logo.svg';
import{BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';
import Ps5 from './pages/Ps5';
import Xboxx from './pages/Xboxx';
import Nosotros from './pages/Nosotros';
import ContactoPage from './pages/ContactoPage';
import Cliente from './pages/Cliente';
import Switch from './pages/Switch';
import Login from './pages/Login';
import Productos from './pages/Productos';
import AdminClientes from './pages/AdminClientes';
import Ordenes from './pages/Ordenes';
import Ventas from './pages/Ventas';
import Categorias from './pages/Categorias';
import Marcas from './pages/Marcas';
import Registro from './pages/Registro';
import AgregarUsuarios from './pages/AgregarUsuarios';
import AgregarProducto from './pages/AgregarProducto';
import ModificarProducto from './pages/ModificarProducto';
import Producto from './pages/Producto';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/Switch" element={<Switch/>}/>
      <Route path="/Producto/:id" element={<Producto/>}/>
      <Route path="/Cliente" element={<Cliente/>}/>
      <Route path="/Ps5" element={<Ps5/>}/>
      <Route path="/Xbox X" element={<Xboxx/>}/>
      <Route path="/Nosotros" element={<Nosotros/>}/>
      <Route path="/Contactenos" element={<ContactoPage/>}/>
      <Route path="/Admin" element={<Productos/>}/>
      <Route path="/AdminClientes" element={<AdminClientes/>}/>
      <Route path="/Ordenes" element={<Ordenes/>}/>
      <Route path="/Ventas" element={<Ventas/>}/>
      <Route path="/Categorias" element={<Categorias/>}/>
      <Route path="/Marcas" element={<Marcas/>}/>
      <Route path="/Registro" element={<Registro/>}/>
      <Route path="/AgregarUsuarios" element={<AgregarUsuarios/>}/>
      <Route path="/AgregarProducto" element={<AgregarProducto/>}/>
      <Route path="/ModificarProducto/:id" element={<ModificarProducto/>}/>
      </Routes> 

      </BrowserRouter>
    </div>
  );
}

export default App;
