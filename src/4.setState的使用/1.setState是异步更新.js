import React, { Component } from "react";

function Home(props) {
  return <h1>{props.message}</h1>;
}

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
        <button onClick={(e) => this.changeText()}>改变文本</button>
        <Home message={this.state.message} />
      </div>
    );
  }
  componentDidUpdate() {
    console.log(this.state.message);  // Hello React (2)
  }

  changeText() {
    this.setState({
        message: "Hello React",
      }, () => {
        console.log(this.state.message);  // Hello React (3)
      });
    console.log(this.state.message);  // Hello World (1)
  }
}
