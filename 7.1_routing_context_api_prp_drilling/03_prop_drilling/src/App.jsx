import React from 'react'
import { useState } from 'react'

function App() {
  const [count,setCount]=useState(0);
  return (
    <div>
      <Count count={count}/>

    </div>
  )
}


function Count({count,setCount}){
return <div>
 {count}
 <Button count={count} setCount={setCount}/>
</div>
}

function Button({count,setCount}){
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
