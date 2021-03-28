import React, { Component } from "react";

class ChildCpn extends Component {
  constructor() {
    super();
    console.log(this.props); // undefined
  }

  render() {
    console.log(this.props, "render"); // {name: "zonghuang", age: "18"} "render"
    const { name, age } = this.props;
    return <h2>子组件展示数据: {name + " " + age}</h2>;
  }

  componentWillUnmount() {}

  componentDidMount() {
    console.log(this.props, "componentDidMount"); // {name: "zonghuang", age: "18"} "componentDidMount"
  }
}

export default class App extends Component {
  render() {
    return (
      <div>
        <ChildCpn name="zonghuang" age="18" />
        {/* <ChildCpn name="Kobe" age="40" /> */}
      </div>
    );
  }
}
