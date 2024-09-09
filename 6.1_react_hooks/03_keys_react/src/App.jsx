import { useState } from 'react'
import React from 'react'
let counter=4;
function App() {
const [todos ,setTodos]=useState([{
  id:1,
  title:"gym",
  discription:"go to gym today"
},
{
  id:2,
  title:"temple",
  discription:"go to temple today"
},
{
  id:3,
  title:"food",
  discription:"have some food at 8PM"
}])
function addTodo(){
  setTodos([...todos,{
    id:counter++,
    title:Math.random(),
    discription:Math.random()
  }])
}
  return (
    <>
    <button onClick={addTodo}>Add a todo</button>
      {todos.map(todo => <Todo key={todo.id} title={todo.title} discription={todo.discription}></Todo>)}
      {/* {todos.map(function (todo){
        return <Todo title={todo.title} discription={todo.discription}></Todo>
      })} */}
    </>
  )
}

function Todo({title,discription}){
  return <div>
    <h1>{title}</h1>
    <h5>{discription}</h5>
  </div>
}
export default App
