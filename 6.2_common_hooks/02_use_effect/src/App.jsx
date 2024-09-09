import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';
function App() {
  const [btn , setBtn] = useState(1);
  return <div>
    <button onClick={function (){
      setBtn(1)
    }}>1</button>
    <button onClick={function (){
      setBtn(2)
    }}>2</button>
    <button onClick={function (){
      setBtn(3)
    }}>3</button>
    <button onClick={function (){
      setBtn(4)
    }}>4</button>
    <Todo id={btn} />
  </div>
}

function Todo({id}) {
  const [todo, setTodo] = useState({});

  useEffect(()=>{
   axios.get("https://66d990ad4ad2f6b8ed55322d.mockapi.io/todo/todo?id=" + id)
    .then(async (response)=>{
      setTodo(response.data[0]);
    })
  },[id]);

  return <div>
    ID:{id}
    <h1>
      {todo.title}
    </h1>
    <h4>
      {todo.description}
    </h4>
  </div>
}

export default App;



// useEffect:
// Purpose: Manages side effects in function components.
// Triggers: Runs after rendering and on subsequent re-renders.
// Use Cases: Fetching data, subscriptions, manually changing the DOM, etc.
// Syntax:
// useEffect(() => {
//   // Side effect logic here
//   return () => {
//     // Cleanup logic (optional)
//   };
// }, [dependencies]);





















// import { useState } from "react";
// import { useEffect } from "react";
// import axios from 'axios';
// function App() {
//   const [todos, setTodos] = useState([])

//   // useEffect(() => {
//   //   axios.get("https://66d990ad4ad2f6b8ed55322d.mockapi.io/todo/todo")
//   //   .then(async function (response){
      
//   //     setTodos(response.data);
//   //   })
//   // }, [])
//   // axios syntax ---
//   useEffect(()=>{
//     axios.get("https://66d990ad4ad2f6b8ed55322d.mockapi.io/todo/todo")
//     .then(async function (res){
//       setTodos(res.data);
//     })
//   },[])
//   // fetch syntax  ----- 

//   // fetch("https://66d990ad4ad2f6b8ed55322d.mockapi.io/todo/todo")
//   //     .then(async function (res){
//   //       const json = await res.json();
//   //       setTodos(json);
//   //     })

//   return <div>
//     {todos.map(todo => <Todo title={todo.title} description={todo.description} key={todo.id} />)}
//   </div>
// }

// function Todo({title, description}) {
//   return <div>
//     <h1>
//       {title}
//     </h1>
//     <h4>
//       {description}
//     </h4>
//   </div>
// }

// export default App;












