import React, { createContext, PureComponent, useContext } from "react";

// 创建Context
const UserContext = createContext({
  nickname: "默认",
  level: 1,
  region: "中国",
});

class Home extends PureComponent {
  render() {
    return (
      <UserContext.Consumer>
        {(user) => {
          return (
            <h2>{`昵称：${user.nickname} 等级：${user.level} 区域：${user.region}`}</h2>
          );
        }}
      </UserContext.Consumer>
    );
  }
}

class About extends PureComponent {
  render() {
    return (
      <UserContext.Consumer>
        {(user) => {
          return (
            <h2>{`昵称：${user.nickname} 等级：${user.level} 区域：${user.region}`}</h2>
          );
        }}
      </UserContext.Consumer>
    );
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        App
        <UserContext.Provider value={{ nickname: "kobe", level: 99, region: "中国" }}>
          <Home />
          <About />
        </UserContext.Provider>
      </div>
    );
  }
}
