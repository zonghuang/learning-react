import React, { PureComponent } from "react";
import { EventEmitter } from "events";

// 事件总线：event bus
const eventBus = new EventEmitter();

class Home extends PureComponent {
  render() {
    return <div>Home</div>;
  }

  // 函数加括号和不加括号的区别：
  // 加括号为调用该函数，返回值为函数返回值
  // 不加括号传参相当于传入函数整体，返回值即整个函数体

  componentDidMount() {
    eventBus.addListener("sayHello", this.handleSayHelloListener);
  }

  componentWillUnmount() {
    eventBus.removeListener("sayHello", this.handleSayHelloListener);
  }

  handleSayHelloListener(num, message) {
    console.log(num, message);
  }
}

class Profile extends PureComponent {
  render() {
    return (
      <div>
        Profile
        <button onClick={(e) => this.emmitEvent()}>点击了profile按钮</button>
      </div>
    );
  }

  emmitEvent() {
    eventBus.emit("sayHello", 123, "Hello Home");
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home />
        <Profile />
      </div>
    );
  }
}
