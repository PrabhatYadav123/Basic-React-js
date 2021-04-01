import React ,{useState,useEffect} from 'react'

function HookCounter() {
   const [channelname,setName]= useState("Prabhat Yadav ");
   const [count,setCount]= useState("Subscriber");
   const [count1,setCount1]= useState(0);
   const [count2,setCount2]= useState(0);
   const [count3,setCount3]= useState(0);
   const [name,setName1]= useState({FirstName:'',LastName:''});

//    const name=channelname[0];
//    const setName=channelname[1];
   const stateHandler=()=>{
      setName("Rahul Raj ")
      setCount("50000")
   }
   const Increment=()=>{
       setCount1(count1 +1)
   }
   const Decrement=()=>{
       setCount2(count2 -1)
   }
   const Incremented=()=>{
       for(let i=0;i<10;i++){

           setCount3(precount=>precount+1)
       }
   }
   useEffect(()=>{
       console.log("prabhat Yadav");
   },[count2,count1])
    return (
        <div>
            <h5>{channelname}</h5>
           <h4> {count}</h4>
            <button onClick={stateHandler}>Click Me</button>
            <button onClick={Increment}>Increment  {count1}</button>
            <button onClick={Decrement}>Decrement  {count2}</button>
            <button onClick={Incremented}>Increment by 10-  {count3}</button>
            <form>
                <input type="text" value={name.FirstName} onChange={e=>{setName1({...name,FirstName:e.target.value})}}></input>
                <input type="text" value={name.LastName} onChange={e=>{setName1({...name,LastName:e.target.value})}}></input>
            </form>
            {name.FirstName}
            {name.LastName}
        </div>
    )
}

export default HookCounter
