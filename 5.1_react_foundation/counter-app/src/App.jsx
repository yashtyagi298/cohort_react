import {useState} from "react";

function App(){
  const [count,setCount]=useState(0);
   
  return (
    <div>
      <CustomButton count={count} setCount={setCount}></CustomButton>
    </div>
  )
}

//componet 
function CustomButton(props){
  function onClickHandler(){
    props.setCount(props.count+1);
  }

  return <button onClick={onClickHandler}>
    Counter {props.count}
  </button> 
}

export default App










// // let state={
// //   count:0
// // };
// //hook
// import {useState} from "react";

// // jsx in jsx file we have to write a javascript or xml 
// function App() {
//   const [count,setCount]=useState(0);//[1,2]
//   function onClickHandler(){
//     setCount(count+1);
//   }

//   return (
//     <div>
//            <button onClick={onClickHandler}>Counter {count}</button>
//     </div>
//   )
// }

// export default App
