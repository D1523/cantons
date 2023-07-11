import Header from "./header"
import "./App.css";
import Footer from "./footer";
import Content from "./content";
import ContainerCard from "./containerCard";
import { Container } from "react-bootstrap";
function App() {
  return (

    <Container className="text-center mt-5" >
     <Header/>
     <Content/>
     <ContainerCard/>
     <Footer/>
    </Container>
  );
}

export default App;
