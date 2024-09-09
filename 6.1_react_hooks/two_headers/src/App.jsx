import React from 'react';
import {useState} from "react";



function App() {

  const [title,setTitle] =useState("my name is yash");

 function updateTitle(){
setTitle("my name is " + Math.random());
 }
return (
  <div>  
    <button onClick={updateTitle}>Update the title</button>
    <Header title ={title} ></Header>
  <Header title="tyagi_1"></Header>
  <Header title="tyagi_2"></Header>
  <Header title="tyagi_3"></Header>
  <Header title="tyagi_4"></Header>
  <Header title="tyagi_5"></Header>
 </div>
)

}
//memo syntax
// const Header = React.memo();
// put this function inside memo 
// function({title}){
//   return <div>
//     {title}
//   </div>
//  }
const Header = React.memo(function({title}) {
 return <div>
   {title}
 </div>
})

export default App


//-----------------------------Minimise re-rendring using push the state down 
// import React from 'react';
// import {useState} from "react";



// function App() {

// return (
//   <div>  
//  <HeaderWithButton/>
//   <Header title="tyagi_1"></Header>
//   <Header title="tyagi_2"></Header>
//   <Header title="tyagi_3"></Header>
//   <Header title="tyagi_4"></Header>
//   <Header title="tyagi_5"></Header>
//  </div>
// )
// }

// function HeaderWithButton(){
//   const [title,setTitle] =useState("my name is yash");

//  function updateTitle(){
// setTitle("my name is " + Math.random());
//  }

//  return <div>
//  <button onClick={updateTitle}>Update the title</button>
//  <Header title ={title} ></Header>
//  </div>
// }

// function Header({title}) {
//  return <div>
//    {title}
//  </div>
// }

// export default App
