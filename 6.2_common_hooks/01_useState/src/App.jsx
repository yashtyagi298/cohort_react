import React from 'react'
import { useState } from 'react';

function App() {
  const [count ,setcount]=useState(0);
  return (
    <>
     <button onClick={()=>{
      setcount(count+1)
     }} >Click me {count}</button>
    </>
  )
}

export default App
