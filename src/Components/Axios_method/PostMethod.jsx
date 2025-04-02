import axios from 'axios';
import React, { useState } from 'react'

function PostMethod() {
    const data = {fname: "", lname:""};
    const [input, setinput] = useState(data);

 const handleData = (e)=>{
      setinput({...input, [e.target.name]: e.target.value})
  }
  const hendleSubmit = (e)=>{
     e.preventDefault();
     axios.post("https://jsonplaceholder.typicode.com/users", input)
     .then((response) =>{
   console.log(response);
   
     })
  }

  return (
    
    <>
   <label>FName</label>
   <input type='text' name='fname' value={input.fname} onChange={handleData} /><br/>
   <label>LName</label>
   <input type='text' name='lname' value={input.lname} onChange={handleData}/>
   <button onClick={hendleSubmit}>Submit</button>

    </>
  )
}

export default PostMethod