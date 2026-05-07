import { useState } from 'react'
import Counter from './counter'
import Batman from './Batman'
import './App.css'

function App() {
 
  function handleClick() {
    alert('clicked');
  }
const handleClick2 =() =>{
  alert('clicked2');
}
const handleAdd5 =(num)=>{
  const newNumber= num + 5;
  alert(newNumber);
}

  return (
    <>
    <Batman></Batman>
    <Counter> </Counter>
     <h3>Vite + react</h3>
     <button onClick={handleClick}>click me</button>
     <button onClick={handleClick2}>click me too</button>
     <button onClick={() => handleAdd5(10)}>Add 5</button>

    </>
  )
}

export default App
