import React, { PureComponent } from 'react'

export default class CounterTitleClass extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    }
  }

  componentDidMount() {
    document.title = `当前计数: ${this.state.counter}`
  }

  componentDidUpdate() {
    document.title = `当前计数: ${this.state.counter}`
  }

  render() {
    return (
      <div>
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick={e => this.increment()}>+1</button>
        <button onClick={e => this.decrement()}>-1</button>
      </div>
    )
  }

  increment() {
    this.setState({counter: this.state.counter + 1});
  }

  decrement() {
    this.setState({counter: this.state.counter - 1});
  }
}