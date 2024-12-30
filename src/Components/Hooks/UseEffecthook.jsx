import React, { useEffect, useState } from 'react'

function UseEffecthook() {
    
        const [add,setadd] = useState(0);
       
    useEffect(() => {
        document.title= add;
        console.log("UseEffect is runing ....!");
        
     
    }, [add])
    
  return (
    <div>

<h2 >Copunter : {add} </h2>
<button onClick={()=>setadd(add +1)}>Incremet</button>
<button onClick={()=>setadd(add -1)}>decremet</button>

    </div>
  )
}

export default UseEffecthook