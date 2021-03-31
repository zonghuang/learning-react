import React, { forwardRef, useRef } from 'react'

const MYInput = forwardRef((props, ref) => {
  return <input type="text" ref={ref} />
})

export default function ForwardRef() {
  const inputRef = useRef();

  return (
    <div>
      <MYInput ref={inputRef} />
      <button onClick={e => inputRef.current.focus()}>聚焦</button>
    </div>
  )
}
