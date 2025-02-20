import React, { useReducer } from 'react'
import Counter from './Counter'

function UseReducer() {
  
    const reducer=  (state, action) =>{
        switch (action.type){
            case 'INCREMENT' :
             return {counter : state.counter + 1} 
             
             case 'DECREMENT' :
                return {counter : state.counter - 1} 

                case 'TOGGLE' :
                    return {...state, hideen: !state.hideen }
                    default:
                        return state ;
        }
    }


   const [state, dispatch] = useReducer(reducer, {counter : 0, hideen: false} )

  return (
    <div>
        <h1>{state.counter}</h1>
     
        <button onClick={()=> dispatch({type :'INCREMENT'})}> ADD</button>
        <button onClick={()=> state.counter > 0 && dispatch({type :'DECREMENT'})}> Sub</button>


        <button  onClick={()=> dispatch({type :'TOGGLE'})}> Hidden</button>

        {state.hideen ? <h1>hidden</h1> : <h1>not hidden</h1>}

        
    </div>
  )
}

export default UseReducer