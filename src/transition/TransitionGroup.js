import React, { PureComponent } from 'react'

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import './TransitionGroup.css';

export default class GroupAnimation extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      friends: ["coderwhy", "kobe", "lilei"]
    }
  }

  render() {
    return (
      <div>
        <TransitionGroup>
          {
            this.state.friends.map((item, index) => {
              return (
                <CSSTransition classNames="friend" timeout={300} key={item}>
                  <div>
                    {item}
                    <button onClick={e => this.removeFriend(index)}>-</button>
                  </div>
                </CSSTransition>
              )
            })
          }
        </TransitionGroup>
        <button onClick={e => this.addFriend()}>+friend</button>
      </div>
    )
  }

  addFriend() {
    this.setState({
      friends: [...this.state.friends, "zonghuang"]
    })
  }

  removeFriend(index) {
    // index indey indez
    this.setState({
      friends: this.state.friends.filter((item, indey) => index !== indey)
    })
  }
}
