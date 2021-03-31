import React, { useEffect } from 'react'

function useLoggingLife(name) {
  useEffect(() => {
    console.log(`${name}组件被创建了`);
    return () => {
      console.log(`${name}组件被销毁了`);
    }
  }, [])
}

function Home(props) {
  // useEffect(() => {
  //   console.log("组件被创建了");
  //   return () => {
  //     console.log("组件被销毁了");
  //   }
  // }, [])
  useLoggingLife(props.name)
  return <h2>Home</h2>
}

function Profile(props) {
  // useEffect(() => {
  //   console.log("组件被创建了");
  //   return () => {
  //     console.log("组件被销毁了");
  //   }
  // }, [])
  useLoggingLife(props.name)
  return <h2>Profile</h2>
}

export default function CustomHook() {
  // useEffect(() => {
  //   console.log("组件被创建了");
  //   return () => {
  //     console.log("组件被销毁了");
  //   }
  // }, [])
  useLoggingLife('CustomHook')

  return (
    <div>
      <h2>CustomHookDemo</h2>
      <Home name='Home' />
      <Profile name='Profile' />
    </div>
  )
}
