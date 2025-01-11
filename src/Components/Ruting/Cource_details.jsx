import React from 'react';
import {useParams,Link} from "react-router";

function Cource_details() {
   
  const arr = [
    {id:"1", name:"Mern_stack", Duration:"5month", Price:25000 },
    {id:"02", name:"java_Full_stack", Duration:"5month", Price:20000 },
    {id:"03", name:"Python", Duration:"5month", Price:15000 },
    {id:"04", name:"React_js", Duration:"5month", Price:19000 },
    {id:"05", name:"Php", Duration:"5month", Price:5000 }
   ];

 
 
  const {id} = useParams();
  console.log(id);
  const Cource_filter = arr.filter((data)=> data.id == id);
  
  return (
    <div>
     
     {Cource_filter.map((data) => (
        <div key={data.id}>
          <h1>Course Name: {data.name}</h1>
          <h3>Course Duration: {data.Duration}</h3>
          <p>Course Price: {data.Price}</p>
          <button><Link to={'/cource'}>All Cource</Link></button>
        </div>
      ))}
 

    {/* iise aese me destructure kr sakte hay */}

      {/* <h2>Cource Id:-{id}</h2>
      <h1>Cource Name:-{Cource_filter[0].name}</h1>
      <h3>Cource Duration:-{Cource_filter[0].Duration}</h3>
      <h3>Cource Price:-{Cource_filter[0].Price}</h3> */}
     
    
     
    </div>
  )
}

export default Cource_details