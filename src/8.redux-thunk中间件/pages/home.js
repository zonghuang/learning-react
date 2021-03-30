import React, { PureComponent } from "react";
import { connect } from "react-redux";

import { incAction, addAction, getHomeMultidataAction } from "../store/actionCreators";

class Home extends PureComponent {

  componentDidMount() {
    this.props.getHomeMultidata();
  }

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
  getHomeMultidata() {
    // getHomeMultidataAction不要加括号，而是传入一个函数，到时候这个函数会被主动调用
    dispatch(getHomeMultidataAction);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
