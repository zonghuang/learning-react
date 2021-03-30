import React, { PureComponent } from "react";

import { connect } from "react-redux";

import { decAction, subAction } from "../store/counter/actionCreators";

class Profile extends PureComponent {
  render() {
    return (
      <div>
        <h2>Profile</h2>
        <p>当前计数: {this.props.counter}</p>
        <button onClick={(e) => this.props.decrement()}>-1</button>
        <button onClick={(e) => this.props.subNumber(5)}>-5</button>
        <h2>Banners</h2>
        <ul>
          {
            this.props.banners.map((item, index) => {
              return <li key={item.acm}>{item.title}</li>
            })
          }
        </ul>
        <h2>Recommends</h2>
        <ul>
          {
            this.props.recommends.map((item, index) => {
              return <li key={item.acm}>{item.title}</li>
            })
          }
        </ul>
      </div>
    );
  }
}

/*
function Profile(props) {
  return (
    <div>
      <h2>Profile</h2>
      <p>当前计数: {props.counter}</p>
      <button onClick={(e) => props.decrement()}>-1</button>
      <button onClick={(e) => props.subNumber(5)}>-5</button>
    </div>
  );
}
*/

const mapStateToProps = (state) => {
  return {
    counter: state.counterInfo.counter,
    banners: state.homeInfo.banners,
    recommends: state.homeInfo.recommends
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
