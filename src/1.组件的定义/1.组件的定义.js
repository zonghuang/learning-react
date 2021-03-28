import React, { Component } from "react";

// 类组件
/*
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello React",
    };
  }
  render() {
    return <div>{this.state.message}</div>;
  }
}
*/

/**
 * 函数式组件（特点）
 * 1.没有this对象
 * 2.没有内部状态
 */
export default function App() {
  return <div>函数式组件</div>;
}
