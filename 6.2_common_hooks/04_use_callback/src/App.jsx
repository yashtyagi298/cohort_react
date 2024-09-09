import React from 'react'
import { useState } from 'react';
import { useCallback } from 'react';

function App() {
  const [count , setCount] =useState(0);
  const onClick = useCallback(()=>{
    console.log('child clicked');
  } , [])
  return (
    <>
    <Child onClick={onClick}/>
    <button onClick ={()=>{
      setCount(count+1);

    }}>Click me{count}</button>
    </>
  )
}
const Child = memo(({onClick})=>{
  console.log('child render');
  return <div>
    <button onClick ={onClick}>Button Clicked</button>
  </div>
})

export default App
