import{NavLink} from "react-router-dom";
import "../../style/NavAdmin.css"
const NavAdmin = (props)=>{
    return(
        <nav>
           <div>
           <ul>
         <li><NavLink to="/Admin" className={({isActive})=> isActive ? "activo": undefined}>Productos</NavLink></li>
         <li><NavLink to="/AdminClientes" className={({isActive})=> isActive ? "activo": undefined}>Clientes</NavLink></li>
         <li><NavLink to="/Ordenes" className={({isActive})=> isActive ? "activo": undefined}>Ordenes</NavLink></li>
         <li><NavLink to="/Ventas" className={({isActive})=> isActive ? "activo": undefined}>Ventas</NavLink></li>
         <li><NavLink to="/Categorias" className={({isActive})=> isActive ? "activo": undefined}>Categorias</NavLink></li>
         <li><NavLink to="/Marcas" className={({isActive})=> isActive ? "activo": undefined}>Marcas</NavLink></li>
            </ul>
            </div> 
        </nav>
    );
}

export default NavAdmin;