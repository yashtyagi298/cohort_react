// Create a component with a text input feild and a button . When the component mounts or the button is clicked
// automatically focus the text input field using useRef

import { useRef } from "react";
import { useEffect } from "react";

export function Assignment1(){
    const inputRef=useRef();
     useEffect(()=>{
          inputRef.current.focus()
     },[]);

     const handleButtonClick= ()=>{
       inputRef.current.focus();
     };

     return (
        <div>
            <input ref={inputRef} type="text" placeholder="enter text here"/>
            <button  onClick={handleButtonClick}>Focus input</button>
        </div>
     )
}