import React from "react";

import { connect } from '../utils/connect';

import { decAction, subAction } from "../store/actionCreators";

function Profile(props) {
  return (
    <div>
      <h2>About</h2>
      <p>当前计数: {props.counter}</p>
      <button onClick={(e) => props.decrement()}>-1</button>
      <button onClick={(e) => props.subNumber(5)}>-5</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    decrement: function () {
      dispatch(decAction());
    },
    subNumber: function (num) {
      dispatch(subAction(num));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
