import React from 'react'
import useStore from '../store/useStore'; // Assuming the store is defined in a file called store.js

function Counter() {

    const {count,increment,decrement,reset} = useStore();

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increment} >INCREMENT</button>
        <button onClick={decrement} >DECREMENT</button>
        <button onClick={reset} >RESET</button>
    </div>
  )
}

export default Counter