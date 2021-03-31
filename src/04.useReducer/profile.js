import React, { useReducer } from 'react'
import { counterReducer } from './counter'

export default function Profile() {
  const [state, dispatch] = useReducer(counterReducer, {counter: 0});

  return (
    <div>
      <h2>当前计数: {state.counter}</h2>
      <button onClick={e => dispatch({type: "increment"})}>+1</button>
      <button onClick={e => dispatch({type: "decrement"})}>-1</button>
    </div>
  )
}
