import React, { PureComponent } from "react";

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
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
            value={this.state.username}
            onChange={(e) => this.handleChange(e)}
          />
          <button type="submit">提交</button>
        </form>
      </div>
    );
  }

  handleChange(event) {
    this.setState({
      username: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(event);
    console.log(this.state.username);
  }
}
