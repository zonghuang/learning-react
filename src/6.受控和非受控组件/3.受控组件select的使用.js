import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      fruit: "orange"
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <select name="fruits" value={this.state.fruit} onChange={e => this.handleChange(e)}>
            <option value="apple">苹果</option>
            <option value="banana">香蕉</option>
            <option value="orange">橘子</option>
          </select>
          <button type="submit">提交</button>
        </form>
      </div>
    )
  }

  handleChange(event) {
    this.setState({
      fruit: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.fruit);
  }
}
