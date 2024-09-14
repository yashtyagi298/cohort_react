import {BrowserRouter, Route, Router, Routes, useNavigate} from 'react-router-dom';


import React from 'react'
import { Suspense } from 'react';
// import { Landing } from './components/Landing'; it is simport export 
//import Landing from './components/Landing';  it is export default 
// import { Dashboard } from './components/Dashboard';

const Landing =  React.lazy(()=>import('./components/Landing'));
const Dashboard = React.lazy(()=>import('./components/Dashboard'));

function App() {
// suspense API => asynchronous component fetching , asynchronous data fetching 


  return (
    <div>

      <BrowserRouter>
      <Appbar/>
      <Routes>
        <Route path="/" element={<Suspense fallback={"loading..."}><Landing/></Suspense>}/>
        <Route path="/landing" element={<Suspense fallback ={"loading..."}><Landing/></Suspense>}/>
        <Route path="/dashboard" element={<Suspense fallback={"loading..."}><Dashboard/></Suspense>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

function Appbar(){
  const navigate=useNavigate();

  return <div>
    <button onClick={()=>{
      navigate("/");
    }}>Landing</button>
    <button onClick={()=>{
      navigate("/dashboard");
    }}>Dashboard</button>
  </div>

}

export default App
