import React, { Component } from "react";

// 创建Context对象
const UserContext = React.createContext({
  nickname: "aaa",
  level: 1,
});

const ThemeContext = React.createContext({
  color: "black",
});

function ProfileHeader() {
  return (
    <UserContext.Consumer>
      {(value) => {
        return (
          <ThemeContext.Consumer>
            {(theme) => {
              return (
                <div>
                  <h2 style={{ color: theme.color }}>
                    用户昵称：{value.nickname}
                  </h2>
                  <h2>用户等级: {value.level}</h2>
                </div>
              );
            }}
          </ThemeContext.Consumer>
        );
      }}
    </UserContext.Consumer>
  );
}

function Profile(props) {
  return <div>{<ProfileHeader />}</div>;
}

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nickname: "kobe",
      level: 99,
    };
  }

  render() {
    return (
      <div>
        <UserContext.Provider value={this.state}>
          <ThemeContext.Provider value={{ color: "red" }}>
            <Profile />
          </ThemeContext.Provider>
        </UserContext.Provider>
      </div>
    );
  }
}
