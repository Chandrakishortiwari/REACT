import React, { createContext } from 'react'
import Child1 from './Child1'

const data = createContext();
const data1 =createContext();

function PropsDrilling() {
  const name = "ram";
  const son = "janak";
 

  return (
    <div>PropsDrilling
        <data.Provider value={name}>
           <data1.Provider value={son}>
           <Child1 />
            </data1.Provider> 
        
        </data.Provider>
    </div>
  )
}

export default PropsDrilling;
export {data, data1};
