import React, { forwardRef, useImperativeHandle, useRef } from 'react'

const MYInput = forwardRef((props, ref) => {
  // 创建组件内部的ref
  const inputRef = useRef();
  
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    printHello: () => {
      console.log("Hello World");
    }
  }))

  // 这里绑定的是组件内部的inputRef
  return <input type="text" ref={inputRef} />
})

export default function ImperativeHandleHook() {
  const inputRef = useRef();

  return (
    <div>
      <MYInput ref={inputRef} />
      <button onClick={e => inputRef.current.focus()}>聚焦</button>
      <button onClick={e => inputRef.current.printHello()}>Hello World</button>
    </div>
  )
}
