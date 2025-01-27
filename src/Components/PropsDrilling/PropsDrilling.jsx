import React from 'react'
import Child1 from './Child1'

function PropsDrilling() {
  const name = "ram";

  return (
    <div>PropsDrilling
        <Child1 name = {name} />
    </div>
  )
}

export default PropsDrilling