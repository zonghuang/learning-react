import React, { PureComponent } from "react";

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor="username">用户：</label>
          {/* 受控组件 */}
          <input
            type="text"
            id="username"
            name="username"
            value={this.state.username}
            onChange={(e) => this.handleChange(e)}
          />
          <label htmlFor="password">密码：</label>
          {/* 受控组件 */}
          <input
            type="text"
            id="password"
            name="password"
            value={this.state.password}
            onChange={(e) => this.handleChange(e)}
          />
          <button type="submit">提交</button>
        </form>
      </div>
    );
  }

  handleChange(event) {
    this.setState({
      // 计算属性名
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(event);
    const { username, password } = this.state;
    console.log(username, password);
  }
}
