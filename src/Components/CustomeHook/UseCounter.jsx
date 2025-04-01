import  { useState } from 'react'


function UseCounter() {
   
        const [count, setcount] = useState(0);
        function Increment (){
            setcount(count + 1)
        }
        function Decrement (){
            setcount(count - 1)
        }
  return [count, Increment, Decrement];
}

export default UseCounter