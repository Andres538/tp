import Novedades from "./Novedades";
import Destacados from "./Destacados";
const Inicio=(props)=>{
    return(
        <main class="holder">
      <div>
        <img src="img/i-stock-1287493837-1.jpg" height="300px" width="900px" alt=""></img>
    </div>
    <h2>Novedades</h2>
    <Novedades/>
    <h2>Mas destacados</h2>
   <Destacados/>
    </main>
    )
}
 
export default Inicio;