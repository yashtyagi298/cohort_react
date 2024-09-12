// create a ccounter component with increment and decrement functions . pass these function to a child
// component which has buttons to perform the increment and dercrement action.

// use callBack to ensure that these function are not recrerated on every re-render.

import { useCallback, useState,memo } from "react";

export function Assignment1(){
    const [count , setCount]=useState(0);
 
const  handleIncrement = useCallback(()=>{
    console.log('click');
      setCount(function(currentCount){
        return currentCount+1;
      })
  },[])
  
  const  handleDecrement = useCallback(()=>{
    setCount(currentCount=>currentCount-1)
  },[])

  return (
    <div>
        <p>Count : {count}</p>
        <CounterButton onIncrement={handleIncrement} onDecrement={handleDecrement}/>
    </div>
  );


};

const CounterButton = memo(({onIncrement, onDecrement})=>(
    <div>
     <button onClick={onIncrement}>Increment</button>
     <button onClick={onDecrement}>Decrement</button>
    </div>
));