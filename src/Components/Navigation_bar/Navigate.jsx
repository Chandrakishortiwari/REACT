import React from 'react'
import './Navigate.css'
import {Link} from "react-router";

function Navigate() {
  return (
    <div>
    
    <div className='mainnav'>
            
     <div className="left">Logo</div>
     <div className="right">
     <Link to={'/'}>Home </Link> 
        <Link to={'/contact'}>About</Link>
        <Link to={'/team'}>Team </Link>
      
        <Link to={'/cource'}>Cource</Link>
     </div>
 
    </div>

    </div>
  )
}

export default Navigate