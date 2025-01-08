import React, { useState } from 'react'

function FormHendel() {
  const [name,setname]= useState("")
  const [email,setemail]= useState()
  const [password,setpassword]= useState()
   const hendelSsubmit = (e)=>{
    e.preventDefault();
    alert(`your from is submited succes full `)
    setname("");
    setemail('');
    setpassword(''); 

   }


  return (
    <div>

       <form onSubmit={hendelSsubmit}>
        
        
     <div>
        Name :-  <input value={name} onChange={(e)=>setname(e.target.valu)} type='text'></input>
     </div>

     <div>
        Email :-  <input value={email} onChange={(e)=>setemail(e.target.valu)} type='text'></input>
     </div>

     <div>
        Password :-  <input value={password} onChange={(e)=>setpassword(e.target.valu)} type='text'></input>
     </div>

     <button type='submit'  >Submit</button>
        
        </form> 




    </div>
  )
}

export default FormHendel