import React, {useState} from 'react'

function CreateNo_Off_button() {

const [button, setbutton] = useState(true);
  return (
    <div>
      {button == true ? <h1>Button is on</h1> : <h1>Button is off</h1>}

        <button onClick={()=>setbutton(! button)}>On / Off</button>  <br /><br />
        

    </div>
  )
}

export default CreateNo_Off_button