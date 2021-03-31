import React, { memo, useState, useCallback } from 'react'

const CounterIncrement = memo((props) => {
  console.log("CounterIncrement被渲染：", props.name);
  return <button onClick={props.increment}>+1</button>
})

export default function CallbackHook() {
  const [count, setCount] = useState(0);

  const increment1 = useCallback(function increment() {
    setCount(count + 1);
  }, []);

  const increment2 = function() {
    setCount(count + 1);
  }

  return (
    <div>
      <h2>当前计数：{count}</h2>
      {/* <button onClick={increment1}>+1</button>
      <button onClick={increment2}>+1</button> */}
      <CounterIncrement increment={increment1} name="increment1"/>
      <CounterIncrement increment={increment2} name="increment2"/>
    </div>
  )
}
