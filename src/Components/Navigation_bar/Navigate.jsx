import React, { useState } from 'react'
import './Navigate.css'
import {Link, useNavigate} from "react-router";

function Navigate() {
    const[isLogin,setisLogin] =useState(true);
    const navigate = useNavigate();

   const Login =()=>{
    setisLogin(true);
    navigate('/dasdhboard')
   }

   
   const Loginout =()=>{
    setisLogin(false);
   
   }

  return (
    <div>
    
    <div className='mainnav'>
            
     <div className="left">Logo</div>
     <div className="right">
     <Link to={'/'}>Home </Link> 
      {isLogin && <>
    
     <Link to={'/dashboard'}>Dashbord</Link>
        <Link to={'/contact'}>About</Link>
        <Link onClick={Loginout}>Login </Link>
        </>}
        {!isLogin &&<>
        <Link to={'/team'}>Team </Link>
        <Link to={'/profile'}>Profile</Link>
        <Link onClick={Login}>Loginout </Link>
        <Link to={'/cource'}>Cource</Link>
        </>}
        
     </div>
 
    </div>

    </div>
  )
}

export default Navigate