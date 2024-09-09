import React from 'react'
import { useMemo } from 'react';
import { useEffect } from 'react';
import { useState } from 'react'

function App() {
  const [exchange1Data, setexchange1Data]=useState(0);
  const [exchange2Data, setexchange2Data]=useState({});
  const [bankData,setBankData]=useState(0);

  useEffect(()=>{
    setTimeout(()=>{
      setexchange1Data(exchange1Data+1)
    },2000)
  },[exchange1Data])

  useEffect(()=>{
    setexchange2Data({
      returns:100
    })
  },[])

  useEffect(()=>{
    setTimeout(()=>{
      setBankData(bankData+1)
    },2000)
  },[bankData]);

  const cryptoReturns= useMemo(()=>{console.log('hi');return exchange1Data+exchange2Data.returns;},[exchange1Data,exchange2Data])



  const incomeTax = (cryptoReturns +bankData)*0.3;

  return (
    <>
     hi there , your income tax retruns are {incomeTax}
    </>
  )
}

export default App
