import React from 'react'
import { useRef,useEffect,useState} from 'react'

function App() {
  const [incomeTax , setincomeTax] =useState(2000);
  const divRef = useRef();

  useEffect(()=>{
    setTimeout(()=>{
      console.log(divRef.current)
      divRef.current.innerHTML='10'
    },5000)
  },[])


  return (
    <>
    hi there , your income tax returns are <div ref={divRef}>{incomeTax}</div>
    </>
  )
}

export default App
