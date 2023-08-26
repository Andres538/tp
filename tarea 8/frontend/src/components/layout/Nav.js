import{NavLink} from "react-router-dom";
import '../../style/Nav.css'
const Nav = (props)=>{
    return(
        <nav>
           <div>
           <ul>
         <li><NavLink to="/Cliente" className={({isActive})=> isActive ? "activo": undefined}>Inicio</NavLink></li>
         <li><NavLink to="/Ps5" className={({isActive})=> isActive ? "activo": undefined}>Ps5</NavLink></li>
         <li><NavLink to="/Xbox X" className={({isActive})=> isActive ? "activo": undefined}>Xbox X</NavLink></li>
         <li><NavLink to="/Switch" className={({isActive})=> isActive ? "activo": undefined}>Switch</NavLink></li>
         
            </ul>
            </div> 
        </nav>
    );
}

export default Nav;