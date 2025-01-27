import React from 'react';
import {data, data1} from './PropsDrilling'

function Child3() {
   
  return (
    <>
    
    <data.Consumer>
        {(name) => {
          return(
            <data1.Consumer>
            {(son) => {
              return( <h1> my name is {name} son of {son}</h1>)
            }}
          </data1.Consumer>

            )
        }}
      </data.Consumer>
    
       
    </>
  )
}

export default Child3