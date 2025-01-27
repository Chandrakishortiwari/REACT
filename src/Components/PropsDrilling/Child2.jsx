import React from 'react'
import Child3 from './Child3'

function Child2({name}) {
  
    
  return (
    <div>Child2
        <Child3 name ={name} />
    </div>
  )
}

export default Child2