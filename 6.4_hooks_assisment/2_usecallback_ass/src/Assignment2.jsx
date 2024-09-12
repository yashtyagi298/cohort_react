// create a component with a text input field and a button . The goal is to display an alert with the text enterd when the button is clicked. 
// Use useCallback to memoize the event handler function that triggers the alert, ensuring it's not recreated on every render.
// Currently we only have inputText as a state varialbe and hence you might not se the benifites of 
// useCallback . we are also not passing it down to another component as a prop which is another reason for you to not see it's benifits immedietley

import { useCallback, useState } from "react";

export function Assignment2(){
    const [inputText,setInputText]=useState('');

    // your code starts here 
    const showAlert= useCallback(()=>{
            alert(inputText)
    },[inputText])

    return (
        <div>
            <input
                type="text"
                value={inputText}
                onChange={(e)=>setInputText(e.target.value)}
                placeholder="enter any text"
                />
           <Alert showAlert={showAlert}></Alert>

        </div>
    )
}

function Alert({showAlert}){
    return <button onClick={showAlert}>Alert</button>
}
