import React, { useState } from 'react'
import { useEffect } from 'react';
const useInterval = (callback,delay)=>{
  useEffect(()=>{
    const intervalld = setInterval(callback,delay);
    return ()=>clearInterval(intervalld);
  
  },[callback,delay]);
}
function App() {
  const [count ,setCount]=useState(0);
  useInterval(()=>{
    setCount(count=>count+1)
  },1000)
  return (
    <div>
      times is at {count};
    </div>
  )
}

export default App
