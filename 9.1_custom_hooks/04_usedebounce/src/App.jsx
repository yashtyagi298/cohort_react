import { useEffect } from "react";
import { useState } from "react";



function useDebounce(value,timeout){
const [debounceValue,setDebounceValue]=useState(value);
useEffect(()=>{
  let timer = setTimeout(()=>{
   setDebounceValue(value);
  },timeout);
  return ()=>{
    clearTimeout(timer);
  }
},[value])

return debounceValue;
}

function App(){
  const [value , setValue]= useState(0);
  const debounceValue= useDebounce(value,800);

  return (
    <>
    Debounced value is {debounceValue}
    <input type="text"
    onChange={e=>{setValue(e.target.value)}}
    />
    
    </>
  )
}

export default App