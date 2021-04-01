import React,{useState} from 'react'

function Counter() {
    const [count,setCount]=useState(0)
    const incValue=()=>{
        setCount(count+1);
    }
    return (
        <div>
            <h1>
                {count}
                </h1>
            <button onClick={incValue}>Count</button>
        </div>
    )
}

export default Counter
