import React, { useState } from 'react'
import { useEffect } from 'react';
function useIsOnline(){
  const [isOnline,setIsOnline] = useState(window.navigator.onLine);
  useEffect(()=>{
    window.addEventListener('online',()=>setIsOnline(true));
    window.addEventListener('offline',()=>setIsOnline(false));
  },[])
  return isOnline;
}
function App() {
 const isOnline = useIsOnline();
  return (
    <div>
      {isOnline ? "You are online yay ! " : "You are Offline❌"}
    </div>
  )
}

export default App
