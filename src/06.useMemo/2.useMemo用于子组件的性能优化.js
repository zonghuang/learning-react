import React, { memo, useMemo, useState } from 'react'

function calcNum(count) {
  let total = 0;
  for (let i = 0; i < count; i++) {
    total += i;
  }
  console.log("计算一遍");
  return total;
}

const ShowCounter = memo((props) => {
  console.log("ShowCounter重新渲染");
  return <h1>Counter: {props.total}</h1>
})

const ShowInfo = memo((props) => {
  console.log("ShowInfo重新渲染");
  return <h1>信息：{props.info.name}</h1>
})

export default function MemoHook() {
  const [count, setCount] = useState(10);
  const [isLogin, setIsLogin] = useState(true);

  // const total = calcNum(count);

  // 使用useMemo进行性能优化
  const total = useMemo(() => {
    return calcNum(count);
  }, [count]);

  const info = useMemo(() => {
    return {name: "zonghaung"};
  }, [])

  return (
    <div>
      <h2>数字和：{total}</h2>
      <button onClick={e => setCount(count + 1)}>+1</button>
      {isLogin && <h2>zonghaung</h2>}
      <button onClick={e => setIsLogin(!isLogin)}>切换</button>

      <ShowCounter total={total} />
      <ShowInfo info={info} />
    </div>
  )
}
