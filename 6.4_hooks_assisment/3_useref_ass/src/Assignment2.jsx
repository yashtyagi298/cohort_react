// create a component that tracks and displays the number of items it has been rendered . 
// Use useRef to create a variable that persists across render without causing additional render when it changes.

import React,{useState, useCallback} from 'react';
import { useRef } from 'react';

export function Assignment2(){
    const [count,setCount]=useState(0);
    const numberOfTimesReRender=useRef(0);// useref is a refrence of 0 which does not change refrence  accross re-render 
    const handleReRender =()=>{
        setCount(count+1);
    };
   numberOfTimesReRender.current=numberOfTimesReRender.current+1;
    return  (
        <div>
            <p>this component has rendered {numberOfTimesReRender.current} times.</p>
            <button  onClick={handleReRender}>Force Re-render</button>
        </div>
    )
}