import{BrowserRouter,Routes,Route} from "react-router-dom";
import Header from '../components/layout/Header';
import NavAdmin from '../components/layout/NavAdmin';
import Footer from '../components/layout/Footer';
import VentasPage from "./VentasPage";

function Ventas() {
  return (
    <div className="App">
      <Header></Header>
      <NavAdmin/>
      <VentasPage></VentasPage>
      <Footer/>
    </div>
  );
}

export default Ventas;