// In this assignment , your task is to create component that perform an expensive calculation 
// (finding the factorial) based on a user input.

import { useMemo, useState } from "react";

// Use useMemo to ensure that the calculation in only recomputed when the input, 
// not on every input..

export function Assignment1(){
    const [input ,setInput] =useState(0);
    // your solution starts here 
let expensiveCalculation = useMemo(()=>{
    let  value = 1;
    for(let i=1;i<=input;i++){
       value = value* i;
    }
    return value;
},[input])


      // your solution starts here 
   
      return (
        <>
        <input 
                type="number"
                value={input}
                onChange={(e)=>setInput(Number(e.target.value))}//Number(e.target.value): This converts the string value from the input field into a number. 
        />
        
        <p>Calculated value : {expensiveCalculation}</p>
        </>
      )

}