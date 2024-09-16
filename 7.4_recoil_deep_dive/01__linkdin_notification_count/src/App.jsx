import React from 'react'
import { jobsAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationSelector } from './atoms'
import {RecoilRoot,useRecoilValue,useRecoilState,useSetRecoilState} from 'recoil'
import { useMemo } from 'react';


function App() {
   
   // useRecoilValue is a use current value of the state
  return <RecoilRoot>
     <MainApp/>
  </RecoilRoot>
}
function MainApp(){
  const networkNotificationCount= useRecoilValue(networkAtom);
  const jobsAtomsCount = useRecoilValue(jobsAtom);
  const notificationAtomCount = useRecoilValue(notificationAtom);
const [messageAtomCount , setMessageCountAtom] = useRecoilState(messagingAtom);
 // ----------alternative of selectors -----
// const totalNotificationCount = useMemo(()=>{
// return jobsAtomsCount + notificationAtomCount +messageAtomCount +networkNotificationCount;
// },[jobsAtomsCount , notificationAtomCount , messageAtomCount,networkNotificationCount]) 
 
// --------Selector-------
const totalNotificationCount = useRecoilValue(totalNotificationSelector);
  return (
    <div>
      
      <button>Home</button>

      <button>My Network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
      <button>Jobs {jobsAtomsCount >= 100 ? "99+" :jobsAtomsCount} </button>
      <button onClick={()=>{
        setMessageCountAtom(messageAtomCount=>messageAtomCount+1)
      }}>Message ({messageAtomCount >= 100 ? "99+": messageAtomCount})</button>
      <button>Notifications ({notificationAtomCount>=100 ? "99+" : notificationAtomCount})</button>
      <ButtonUpdater/>
      <button>Me {totalNotificationCount}</button>
    </div>
  )
}

function ButtonUpdater(){

   const setNotificationCountAtom = useSetRecoilState(notificationAtom)
  return <div>
     <button onClick={()=>{
      setNotificationCountAtom(count=>count+1);
     }}>My_updater</button>
  </div>
}

export default App
