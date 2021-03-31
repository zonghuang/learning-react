import React, { useState, useEffect } from 'react'

export default function MutiUseEffect() {
  const [count, setCount] = useState(0);
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    console.log('网络请求');
  }, [])

  useEffect(() => {
    console.log('修改DOM');
  }, [count])

  useEffect(() => {
    console.log('事件监听/订阅事件');

    return () => {
      console.log('取消事件监听/订阅事件');
    }
  }, [])

  return (
    <div>
      <h2>MultiUseEffect</h2>
      <p>{count}</p>
      <button onClick={e => setCount(count + 1)}>+1</button>
      <p>{isLogin ? "zonghuang": "未登录"}</p>
      <button onClick={e => setIsLogin(!isLogin)}>登录/注销</button>
    </div>
  )
}
