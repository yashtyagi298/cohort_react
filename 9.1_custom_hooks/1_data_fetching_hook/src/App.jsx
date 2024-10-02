import React, { useEffect, useState } from 'react'
import axios from 'axios';
import HashLoder from 'react-spinners/HashLoader';
function App() {
     
  function useFetch(n){
    const [todos,setTodos] = useState([]);
    const [loading,setLoading]= useState(true);
   
    // useEffect(()=>{
    //   setInterval(()=>{
    //     axios.get("https://66d990ad4ad2f6b8ed55322d.mockapi.io/todo/todo")
    //     .then(res=>{
    //       setTodos(res.data);
    //       setLoading(false);
    //     })
    //   },n*1000)
    // },[n])

function getData(){
  setTimeout(()=>{
    axios.get("https://66d990ad4ad2f6b8ed55322d.mockapi.io/todo/todo")
    .then(response=>{
      setTodos(response.data);
      setLoading(false);
    })
  },3000)
}

    useEffect(()=>{
     const value =setInterval(()=>{
      getData()
     },n*1000)
     return ()=>{
      clearInterval(value); // it is used to clear previos setinteval clock
     }
    },[n])
    return {todos , loading};
  }
   const {todos ,loading}= useFetch(6);

  return (
    <div className="App">
    {loading ? (
      <div className='flex justify-center items-center h-screen'>
      <HashLoder color={"#040404"} loading={loading} size={50} />
      </div>
    ) : (
      todos.map(todo => <Track key={todo.id} todo={todo} />)
    )}
  </div>
  )
}

function Track({todo}){
  return <>
  <p>{todo.title}</p>
  <p>{todo.description}</p>
  <br/>
  </>
}

export default App
