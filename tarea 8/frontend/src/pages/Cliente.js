import{BrowserRouter,Routes,Route} from "react-router-dom";
import Header from '../components/layout/Header';
import Nav from '../components/layout/Nav';
import Footer from '../components/layout/Footer';
import Inicio from "./Inicio";
import Ps5 from './Ps5';
import Xboxx from './Xboxx';
import Nosotros from './Nosotros';
import Contactenos from './Contactenos';


function Cliente() {
  return (
    <div className="App">
      <Header></Header>
      <Nav/>
      <Inicio/>
      <Footer/>
    </div>
  );
}

export default Cliente;