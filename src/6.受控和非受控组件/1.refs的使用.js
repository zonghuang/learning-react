import React, { createRef, PureComponent } from "react";

class Counter extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  render() {
    return (
      <div>
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick={(e) => this.increment()}>+1</button>
      </div>
    );
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
}

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.titleRef = createRef();
    this.counterRef = createRef();
    this.titleEl = null;
  }

  render() {
    return (
      <div>
        {/* ref=字符串/对象/函数 */}
        <h2 ref="titleRef">Hello React</h2>
        {/* 目前React推荐的方式 */}
        <h2 ref={this.titleRef}>Hello React</h2>
        <h2 ref={(arg) => (this.titleEl = arg)}>Hello React</h2>
        <button onClick={(e) => this.changeText()}>改变文本</button>

        <Counter ref={this.counterRef} />
        <button onClick={(e) => this.appBtnClick()}>App按钮</button>
      </div>
    );
  }

  changeText() {
    console.log(this.refs, this.titleRef, this.titleEl);
    // 1.字符串（不推荐）
    this.refs.titleRef.innerHTML = "Hello";
    // 2.对象方式
    this.titleRef.current.innerHTML = "Hi";
    //3.回调函数方式
    this.titleEl.innerHTML = "你好";
  }

  appBtnClick() {
    this.counterRef.current.increment();
  }
}
