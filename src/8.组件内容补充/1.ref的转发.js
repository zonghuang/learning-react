import React, { createRef, forwardRef, PureComponent } from "react";

// 高阶组件forwardRef
const Profile = forwardRef(function (props, ref) {
  return <p ref={ref}>Profile</p>;
});

class Home extends PureComponent {
  render() {
    return <h2>Home</h2>;
  }
}

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.titleRef = createRef();
    this.homeRef = createRef();
    this.profileRef = createRef();
  }

  render() {
    return (
      <div>
        <h2 ref={this.titleRef}>Hello World</h2>
        <Home ref={this.homeRef} />
        <Profile ref={this.profileRef} name="kobe" />
        <button onClick={(e) => this.printRef()}>打印ref</button>
      </div>
    );
  }

  printRef() {
    console.log(this.titleRef, this.titleRef.current);
    console.log(this.homeRef, this.homeRef.current);
    console.log(this.profileRef, this.profileRef.current);
  }
}
