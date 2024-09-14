import React from 'react'
import { useState } from 'react'
import { CountContext } from './context';
import { useContext } from 'react';

function App() {
  const [count,setCount]=useState(0);


  // Wrap anyone that wants to use the teleported value inside a  provider
  return (
    <div>
      <CountContext.Provider value ={count}>
      <Count setCount={setCount} />
      </CountContext.Provider>
    </div>
  )
}


function Count({setCount}){
 
return <div>
  <CountRenderer/>
  <Button setCount={setCount}/>

</div>
}

function CountRenderer(){
  const count=useContext(CountContext);
  return <div>
    count-rerender {count}
  </div>

}

function Button({setCount}){
  const count=useContext(CountContext);

 return  <div>
<button onClick={()=>{
    setCount(count+1)
}}>Increment</button>
<button onClick={()=>{
   setCount(count-1)
}}>Decrement</button>
</div>
}

export default App
