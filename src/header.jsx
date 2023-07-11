import Container from "react-bootstrap/Container";
import {Image} from "react-bootstrap";
function Header(){
    const parStyle={
        fontFamily: "arial",
        fontSize:"2.5rem",
        border: "2px solid red",
        padding: "30px",
        textAlign: "center",
        margin:"30px",
        borderRadius:"30px",
        }
    const imgStyl={
        borderRadius:"20px",
        width:"400px",
        display:"block",
        margin:"auto",
        textAlign: "center",
        display:"block"


    
      }
  
    //?js dunyasi
    return (
    <Container>
             <h1 style={parStyle}>Cantons of Switzerland</h1>
             <Image style={imgStyl} src="https://cdn.pixabay.com/photo/2018/08/18/11/49/low-poly-3614652_1280.jpg" rounded />
    </Container> 
    );
   
};

export default Header;