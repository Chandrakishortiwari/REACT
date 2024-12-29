

function Props2({ obj }) {
    console.log(obj);
   
  return (
    <>
    
              <h2>Mobile Name={obj.title} </h2>
      <h3> Mobile brand = {obj.Brand}</h3>
      <h4>Mobile Price ={obj.Price} </h4>
      <h4>Mobile Rom = {obj.rom}</h4>
      <h4>Mobile Ram = </h4>
    </>
  )
}

export default Props2