import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello World",
    };
  }

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={(e) => this.changeText()}>改变文本1</button>
        <button id="btn">改变文本2</button>
      </div>
    );
  }

  componentDidMount() {
    document.querySelector("#btn").addEventListener("click", (e) => {
      this.setState({
        message: "Hello React",
      });
      console.log(this.state.message);
    });
  }

  changeText() {
    // 情况一：将setState放入放定时器中
    setTimeout(() => {
      this.setState({
        message: "Hello React",
      });
      console.log(this.state.message);
    }, 0);
  }
}
