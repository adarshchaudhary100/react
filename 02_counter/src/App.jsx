import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [Counter,setcounter]=useState(15);
   const addvalue=()=>{
      // Counter=  Counter+1;
      if(Counter<20)
      setcounter(Counter+1);
      console.log("value added", Math.random());
   }
   const removeValue=()=>{
    if(Counter>0)
    setcounter(Counter-1);
   }
  //  const x=Math.r 
  // let Counter=15;
  return (
    <>
     <h1>Adarsh with react</h1>
     <h2>Counter value: {Counter}</h2>
     <button
     onClick={addvalue}>Add value {Counter}</button>
     <br />
     <button
     onClick={removeValue}>Remove value{Counter}</button>
     <p>{Counter}</p>
    </>
  )
}

export default App
