import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);
    const handleAdd = () => {
        setCount(count + 1);
    };
    const counterStyle={
        display:'flex',
        border:'1px solid yellow',
        flexDirection:'column',
        alignItems:'center',
        gap:'10px'  
    }
  return (
    <div style={counterStyle}>
        <h3>Count:{count} </h3>
        <button onClick={handleAdd}>add</button>
    </div>
  )
}