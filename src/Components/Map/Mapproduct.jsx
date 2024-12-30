import React from 'react'

function Mapproduct() {

    
 
  const obj = [
   { id:1,
    title: "I Phone",
    Brand: "Apple",
    Price: "80000",
    Ram: "8gb",
    rom: "1tv",},
  {id:3,
        title: "phone",
        Brand: "mi",
        Price: "80000",
        Ram: "8gb",
        rom: "1tv",},
        { id:3,
            title: "camra",
            Brand: "dslr",
            Price: "80000",
            Ram: "8gb",
            rom: "1tv",},
          {id:4,
                title: "tv",
                Brand: "sony",
                Price: "80000",
                Ram: "8gb",
                rom: "1tv",}
  ];

  return (
    <div>
       {obj.map((data)=><div key={data.id}>
        <h1>Title:{data.title}</h1>
        <h2>Brand:{data.Brand}</h2>
        <h3>Price:{data.Price}</h3>
        <h4>Ram:{data.Ram}</h4>
        <h5>Rom:{data.rom}</h5>
       </div>)}

    </div>
  )
}

export default Mapproduct