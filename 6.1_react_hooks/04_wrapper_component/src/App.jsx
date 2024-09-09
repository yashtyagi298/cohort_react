import { useState } from 'react'
import React from 'react'
// this how we use wapper component or  take input as an component and render it in real world
function App() {
 

  return (
    <>
      <CardWrapper>
        <h1 style={{backgroundColor:"red"}}>hi there!</h1>
      </CardWrapper>

      <CardWrapper>
      <h2>Hello Bhai</h2>
      </CardWrapper>
    
    </>
  )
}
// children is reffers to a child of the component 
function CardWrapper({children}) {
 return <div style={{border :"2px solid black",padding:20,margin:10}}> 
{children}
 </div>
}

export default App


//-------------------------------------LOGIC OF WRAPPING A CARD --------------------
// import { useState } from 'react'
// import React from 'react'

// function App() {
 

//   return (
//     <>
//       <CardWrapper innerComponent={<TextComponent/>}/>
//       <CardWrapper innerComponent={<TextComponent2/>}/>
//     </>
//   )
// }
// function TextComponent(){
//   return <div>
//     hi there!
//   </div>
// }
// function TextComponent2(){
//   return <div>
//     hi there!2
//   </div>
// }
// function CardWrapper({innerComponent}) {
//  return <div style={{border :"2px solid black",padding:20,margin:10}}> 
// {innerComponent}
//  </div>
// }

// export default App
