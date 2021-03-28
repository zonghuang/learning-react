import React, { createContext, PureComponent, useContext } from "react";

function withUser(WrappedComponent) {
  return (props) => {
    return (
      <UserContext.Consumer>
        {(user) => {
          return (
            <h2>{`昵称：${user.nickname} 等级：${user.level} 区域：${user.region}`}</h2>
          );
        }}
      </UserContext.Consumer>
    );
  };
}

// 创建Context
const UserContext = createContext({
  nickname: "默认",
  level: 1,
  region: "中国",
});

class Home extends PureComponent {
  render() {
    return (
      <h2>{`昵称：${this.props.nickname} 等级：${this.props.level} 区域：${this.props.region}`}</h2>
    );
  }
}

class About extends PureComponent {
  render() {
    return (
      <h2>{`昵称：${this.props.nickname} 等级：${this.props.level} 区域：${this.props.region}`}</h2>
    );
  }
}

class Detail extends PureComponent {
  render() {
    return (
      <ul>
        <li>{this.props.nickname}</li>
        <li>{this.props.level}</li>
        <li>{this.props.region}</li>
      </ul>
    );
  }
}

const UserHome = withUser(Home);
const UserAbout = withUser(About);
const UserDetail = withUser(Detail);

export default class App extends PureComponent {
  render() {
    return (
      <div>
        App
        <UserContext.Provider value={{ nickname: "kobe", level: 99, region: "中国" }}>
          <UserHome />
          <UserAbout />
          <UserDetail />
        </UserContext.Provider>
      </div>
    );
  }
}
