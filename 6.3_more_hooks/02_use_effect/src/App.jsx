import { useState ,useEffect } from 'react'

function App() {
  const [exchangeData, setExchangeData] = useState({});
  const [bankData, setBankData] = useState({});
  console.log('re-render....')

  useEffect(()=>{
    setTimeout(()=>{
      setBankData({
        income:100
      })
    },2000)

    setTimeout(() => {
      setExchangeData({
        returns: 100
      });
    }, 1000);

  },[])


  const incomeTax = (bankData.income + exchangeData.returns) * 0.3;

  return (
    <div>
        hi there, your income tax returns are {incomeTax}
    </div>
  )
}

export default App