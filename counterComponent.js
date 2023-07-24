import {useState} from 'react'
const CounterComponent = ()=> {
  const [count,setCount]=useState(0)
  function decrement () {
    setCount(prevCount => prevCount-1)
  }
  function increment () {
    setCount(prevCount => prevCount+1)
  }
  return (
    <div>
        <button onClick={decrement}>-</button>
       {count}
       <button onClick={increment}>+</button>
     </div> 
  )
}
export default CounterComponent