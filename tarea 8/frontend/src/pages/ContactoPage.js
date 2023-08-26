import Header from '../components/layout/Header';
import Nav from '../components/layout/Nav';
import Footer from '../components/layout/Footer';
import Contactenos from './Contactenos';


function ContactoPage() {
  return (
    <div className="App">
      <Header></Header>
      <Nav/>
      <Contactenos/>
      <Footer/>
    </div>
  );
}

export default ContactoPage;