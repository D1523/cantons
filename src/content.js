const Content = () => {

  const parStyle={
    fontFamily: "arial",
    fontSize:"1.9rem",
    textAlign:"justify"
}

  const imgStyl={
    borderRadius:"20px",
    width:"400px",
    display:"block",
    margin:"auto"

  }
  return (
    
    <main>

    <img style={imgStyl} src="https://cdn.pixabay.com/photo/2016/07/06/14/37/switzerland-1500642_1280.png"/>
<p style={parStyle}>
  You probably know that Switzerland is divided into cantons but you might not know how many 
  cantons there are in Switzerland or what a canton actually does. Well, there are 26 Swiss 
  cantons and they have responsibility for everything that isn’t covered by the federal 
  government.
  </p>
</main>

  )
}

export default Content