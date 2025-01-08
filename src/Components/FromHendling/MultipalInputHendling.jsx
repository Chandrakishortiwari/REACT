import React, { useState } from 'react'

function MultipalInputHendling() {

    const [formedata,setformdata]= useState({
        uname:"",
        ulname:"",
        uphone:"",
        uemail:"",
        uage:"",
        upassword:"",
        upin:""  
    })

    const onclickhendler =(e)=>{
        const{name,value} = e.target;

        setformdata({...formedata, [name]:value})

    }

    const fomeHendler= (e)=>{
        e.preventDefault();
        alert('your from submited succes full');
        console.log(formedata);

        setformdata({uname:"",
            ulname:"",
            uphone:"",
            uemail:"",
            uage:"",
            upassword:"",
            upin:""})
        
        

    }
  return (
    <>
           
     <form onSubmit={fomeHendler}>
         
      <div >
     Frist-Name: <input type='text' placeholder='Frist-name' value={formedata.uname}  name='uname' onChange={onclickhendler} ></input> <br></br>
      Last-Name: <input type='text' placeholder='last-name' value={formedata.ulname} name='ulname' onChange={onclickhendler}  ></input><br></br>
      Phone: <input type='text' placeholder='phone number' value={formedata.uphone} name='uphone' onChange={onclickhendler}  ></input><br></br>
      Email: <input type='text' placeholder='Email' value={formedata.uemail} name='uemail' onChange={onclickhendler}  ></input><br></br>
      Age: <input type='text' placeholder='Age' value={formedata.uage} name='uage' onChange={onclickhendler}  ></input><br></br>
      Password: <input type='text' placeholder='Password' value={formedata.upassword} name='upassword' onChange={onclickhendler} ></input><br></br>
      Pin-no: <input type='text' placeholder='Pinnumber' value={formedata.upin} name='upin' onChange={onclickhendler}  ></input><br></br>

      </div>
      <div>
        <button>Submit</button>
      </div>

     </form>



    </>
  )
}

export default MultipalInputHendling