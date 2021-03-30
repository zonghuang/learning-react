import React, { PureComponent } from 'react'

import store from '../store';
import { decAction, subAction } from '../store/actionCreators';

export default class Profile extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: store.getState().counter
    }
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        counter: store.getState().counter
      })
    })
  }

  render() {
    return (
      <div>
        <h2>Profile</h2>
        <p>当前计数：{this.state.counter}</p>
        <button onClick={e => this.decrement()}>-1</button>
        <button onClick={e => this.subNumber(5)}>-5</button>
      </div>
    )
  }

  decrement() {
    store.dispatch(decAction());
  }
  
  subNumber(num) {
    store.dispatch(subAction(num));
  }

}
