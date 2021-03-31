import React, { useMemo, useState } from 'react'

function calcNum(count) {
  let total = 0;
  for (let i = 0; i < count; i++) {
    total += i;
  }
  console.log("计算一遍");
  return total;
}

export default function MemoHook() {
  const [count, setCount] = useState(10);
  const [isLogin, setIsLogin] = useState(true);

  // const total = calcNum(count);

  // 使用useMemo进行性能优化
  const total = useMemo(() => {
    return calcNum(count);
  }, [count]);

  return (
    <div>
      <h2>数字和：{total}</h2>
      <button onClick={e => setCount(count + 1)}>+1</button>
      {isLogin && <h2>zonghaung</h2>}
      <button onClick={e => setIsLogin(!isLogin)}>切换</button>
    </div>
  )
}
