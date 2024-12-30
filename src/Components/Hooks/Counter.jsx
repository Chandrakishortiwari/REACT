import React, { useState } from 'react'

function Counter() {

   

    const [add,setadd] = useState(0);
   

    // const incrment = () =>{
    //    setadd(add+1)
    // }

    const decrement = () =>{
        if(add > 0){
            setadd(add-1)
        }
       
     }
    


  return (
    <div>
    
    <h2 >Copunter : {add} </h2>
    <button onClick={()=>setadd(add +1)}>Incremet</button>
    <button onClick= {decrement}>Incremet</button>

    </div>
  )
}

export default Counter