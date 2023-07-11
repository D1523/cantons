import { Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
//import Col from "react-bootstrap/Col";
import { useState } from "react";
import {data} from "./data";
import CantonsCard from "./cantonsCard";
const ContainerCard = () => {
  const [search,setSearch]= useState("")
  console.log(data)
  const handleChange=(e)=>{
    console.log(e.target.value)
    setSearch(e.target.value)
  }
  console.log(search);
  const filteredData=data.filter(item=>item.name.toLowerCase().includes(search.trim().toLowerCase()))
  console.log("filter",filteredData)

    const imgStyl={
        borderRadius:"10px",
        width:"400px",
        display:"block",
        margin:"auto"

    
      }
  return (
    <>
 
<Form.Control type="search" placeholder="Search Cantons"
onChange={handleChange} />
<Container className="p-3 rounded-4 card-container my-3">
      <Row xs={2} md={3} lg={4} classNmame="justify-center g-3 ">
        {
          filteredData.map((canton,i)=><CantonsCard key={i} 
          {...canton}/>)
        }
      

      </Row>
    </Container>
    </>
    );
}

export default ContainerCard