import React, { useContext } from 'react';
import {data, data1} from './PropsDrilling'

function Child3() {
 const name =  useContext(data);  
 const son =  useContext(data1);  
  return (
    <>
    
   <h1>my name is {name} son of {son}</h1>
    
       
    </>
  )
}

export default Child3