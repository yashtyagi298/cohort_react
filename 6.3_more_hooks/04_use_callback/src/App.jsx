import React from 'react'
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useState,memo } from 'react';

function App() {
const [exchange1Data,setexchange1Data]=useState({});
const [exchange2Data,setexchange2Data]= useState({});
const [bankData,setBankData]=useState(0);

useEffect(()=>{
  setexchange1Data({
    returns:100
  })
},[])

useEffect(()=>{
  setexchange2Data({
    returns:100
  })
},[])

useEffect(()=>{
  setTimeout(()=>{
    setBankData(bankData+1)
  },2000)
},[bankData])

const cryptoReturn = useCallback( function(){
  return exchange1Data.returns+ exchange2Data.returns
 },[exchange1Data,exchange2Data])


const incomeTax=(cryptoReturn()+bankData)*0.3;
  return (
 <>
<Child calculate_Crypto_Return ={cryptoReturn}/>
<Dummy></Dummy>
 </>
  )
}

const Dummy =memo(function()
{
  console.log('re render from dummy');
  return <>
  hii
  </>
})
const Child = memo(function ({calculate_Crypto_Return}){
  console.log('crypto child re render')
  return <div>
    
    your cryptoreturns are {calculate_Crypto_Return()}
  </div>
})

export default App
