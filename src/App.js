import React, { PureComponent } from 'react'

import CSSTransitionDemo from './transition/CSSTransition';
import SwitchTransitionDemo from './transition/SwitchTransition';
import TransitionGroupDemo from './transition/TransitionGroup';

export default class App extends PureComponent {
  render() {
    return (
      <div style={{textAlign: "center", padding: "30px"}}>
        <CSSTransitionDemo/>
        <SwitchTransitionDemo/>
        <TransitionGroupDemo/>
      </div>
    )
  }
}
