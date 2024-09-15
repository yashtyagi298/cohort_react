import React from 'react'
import { useState } from 'react'
import { CountContext } from './context';
import { useContext } from 'react';
import  { RecoilRoot, useRecoilState,useRecoilValue, useSetRecoilState } from "recoil"
import { countAtom } from './store/atoms/Count';
import { useMemo } from 'react';
import { evenSelector } from './store/atoms/Selector';

function App() {
  


  // Wrap anyone that wants to use the teleported value inside a  provider
  return (
    <div>
    <RecoilRoot>
      <Count/>
     
      </RecoilRoot>
    </div>
  )
}


function Count(){
 console.log("re-render")
return <div>
  <CountRenderer/>
  <Button />

</div>
}

function CountRenderer(){
 const count= useRecoilValue(countAtom);

  return <div>
    count-rerender {count}
    <Even/>
  </div>

}

function Button(){
  
  // const [count , setCount]=useRecoilState(countAtom); make it slightly more optimal 
  const setCount = useSetRecoilState(countAtom)

  console.log("button-re-render")
 return  <div>
<button onClick={()=>{
  setCount(count=>count+1)
}}>Increment</button>
<button onClick={()=>{
   setCount(count=>count-1)
}}>Decrement</button>
</div>
}
function Even(){
  // const count= useRecoilValue(countAtom);
  // const isEven = useMemo(()=>{
  //   console.log("memo-render")
  //   return count%2==0
  // },[count])
 
  const isEven = useRecoilValue(evenSelector);
  

  return <div>
    {isEven ? "It is Even" : "It is Odd"}
  </div>

}
export default App
