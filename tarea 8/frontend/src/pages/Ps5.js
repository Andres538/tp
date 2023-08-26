import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Nav from "../components/layout/Nav";
import Ps5page from "./Ps5page";
    
const Ps5=(props)=>{  
  return(
        <main class="holder">
          <Header></Header>
          <Nav></Nav>
        <div class="destacados">
          <Ps5page></Ps5page>
        </div>
        <Footer></Footer>
        <div><p>&#60;&#60; &#60; 1 &#62; &#62;&#62;</p></div>
       </main>
    )
}

export default Ps5;