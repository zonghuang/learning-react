import React, { Component } from "react";

class CounterButton extends Component {
  render() {
    const { onDecrement } = this.props;
    return <button onClick={onDecrement}>-1</button>;
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  render() {
    return (
      <div>
        <h2>当前计数：{this.state.counter}</h2>
        <button onClick={(e) => this.increment()}>+</button>
        <CounterButton onDecrement={(e) => this.decrement()} name="zonghuang" />
      </div>
    );
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  decrement() {
    this.setState({
      counter: this.state.counter - 1,
    });
  }
}
