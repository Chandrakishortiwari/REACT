import React from 'react';
import {useNavigate} from "react-router";
 

function Team() {
  let navigate = useNavigate();
 const homePage = ()=>{
  navigate('/')
 }

 const previousPage = ()=>{
  navigate(-1)
 }

  return (
    <div> <h1>Team</h1>
   <button onClick={homePage}>Back to Home page</button>
   <button onClick={previousPage}>Back to previous page</button>

    </div>
  )
}

export default Team