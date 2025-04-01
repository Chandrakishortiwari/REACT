import React, { useState } from 'react'
import UseCounter from './UseCounter'

function CustomeHook() {
   
const [count, Increment, Decrement] = UseCounter();

  return (
    <div>
     <h1>count :-- {count}</h1>
     <button onClick={Increment}>INCEMENT</button >
     <button onClick={Decrement}>DECREMENT</button>


    </div>
  )
}

export default CustomeHook