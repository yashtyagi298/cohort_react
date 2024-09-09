import React from 'react'
import { useMemo } from 'react';
import { useState } from 'react';
function App() {
  const [count,setCount] = useState(0);
  const [inputValue , setInputValue] = useState(1);
//useMemo
  let counter = useMemo(()=>{
    let finalCounter =0;
    for(let i=1;i<=inputValue;i++){
      finalCounter=finalCounter+i;
    }
    return finalCounter;
  },[inputValue])
  return (
   <>
     <input onChange={e=>{
         setInputValue(e.target.value);
     }}placeholder="enter a value "></input><br>
     </br>
     sum from 1 to {inputValue} is {counter}
     <br>
     </br>
     <button onClick={()=>{
      setCount(count+1)
     }}>counter({count})</button>
   </>
  )
}

export default App
