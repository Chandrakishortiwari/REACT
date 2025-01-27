import React from 'react'

function Child3({name}) {
    console.log(name);
  return (
    <div>Child3
        <h1>
           name:-{name}
        </h1>
    </div>
  )
}

export default Child3