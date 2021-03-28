import React, { createRef, PureComponent } from "react";

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.usernameRef = createRef();
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
            ref={this.usernameRef}
          />
          <button type="submit">提交</button>
        </form>
      </div>
    );
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.usernameRef, this.usernameRef.current.value);
  }
}
