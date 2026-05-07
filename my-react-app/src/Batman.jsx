import { useState } from "react"

export default function Batman() {
const [runs, setRuns] =useState(0);
const handleSingle =()=>{
  setRuns(runs + 1);
}
const handleFour =()=>{
  setRuns(runs + 4);
}
const handleSix =()=>{
  setRuns(runs + 6);
}   

  return (
    <div>
      <h1>player : bangla batsman</h1>
      {
        runs >=50 ? <h3>50 runs scored!</h3> : <h3>keep playing...</h3>
        }
        {
        runs >=100 ? <h3>100 runs scored!</h3> : <h3>keep playing...</h3>
      }
      <h1>SCORE: {runs}</h1>
      <button onClick={handleSingle}> single: </button>

    <button onClick={handleFour}>four</button>
    <button onClick={handleSix}>six</button>
    </div>
  )
}