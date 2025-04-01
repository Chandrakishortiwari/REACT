import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { data } from 'react-router';

function Datafatching() {
    const [Data, setData] = useState([]);
    useEffect(() => {
       axios.get("https://jsonplaceholder.typicode.com/users")
       .then((response)=>{
        setData(response.data);
       
        
       
        
       })
    }, [])
   
    
    
  return (
    <div>
    
{Data.map((apidata)=>{
    return(
        <div>{apidata.name}</div>
    )
}
 
)}
    </div>
  )
}

export default Datafatching