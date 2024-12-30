import React, { useEffect, useState } from 'react'

function Fatch_data_api() {

   const [ApiData,setApiData] = useState([])

    useEffect(() => {
     const fetchdataFormApi = async () =>{
        const api = await fetch("https://jsonplaceholder.typicode.com/todos");
        const Data = await api.json();
        setApiData(Data)
        console.log("my data := ", Data);
        
     }
      
     fetchdataFormApi ();
     
    }, [])
    
  return (
    <div >
        {ApiData.map((data)=><div key={data.id}>
            <h2 style={{background:'blue', margin:'10px', border:'1px solid red', borderRadius:'20px' }}>{data.title}</h2>
        </div>)}
        

    </div>
  )
}

export default Fatch_data_api