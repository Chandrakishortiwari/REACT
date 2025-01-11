import React from 'react'
import {Link} from "react-router";

function Cource() {
   const arr = [
    {id:"1", name:"Mern_stack", Duration:"5month", Price:25000 },
    {id:"02", name:"java_Full_stack", Duration:"5month", Price:20000 },
    {id:"03", name:"Python", Duration:"5month", Price:15000 },
    {id:"04", name:"React_js", Duration:"5month", Price:19000 },
    {id:"05", name:"Php", Duration:"5month", Price:5000 }
   ]

  return (
    <div>
 
        <ul>
        {arr.map((data)=> <div key={data.id}>
          <li> <Link to={`/cource/${data.id}`}>{data.name}</Link></li>
        </div>)}
        </ul>

       
    </div>
  )
}

export default Cource   


