import React, { PureComponent } from "react";

import { connect } from '../utils/connect';

import { incAction, addAction } from "../store/actionCreators";

class Home extends PureComponent {
  render() {
    return (
      <div>
        <h2>Home</h2>
        <p>当前计数: {this.props.counter}</p>
        <button onClick={(e) => this.props.increment()}>+1</button>
        <button onClick={(e) => this.props.addNumber(5)}>+5</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter,
});

const mapDispatchToProps = (dispatch) => ({
  increment() {
    dispatch(incAction());
  },
  addNumber(num) {
    dispatch(addAction(num));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
