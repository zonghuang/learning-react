import React, { PureComponent } from "react";
import { connect } from "react-redux";

import axios from 'axios';

import { incAction, addAction, changeBannersAction, changeRecommendsAction } from "../store/actionCreators";

class Home extends PureComponent {

  componentDidMount() {
    axios.get("http://123.207.32.32:8000/home/multidata").then(res => {
      const data = res.data.data;
      this.props.changeBanners(data.banner.list);
      this.props.changeRecommends(data.recommend.list);
    })
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
  changeBanners(banners) {
    dispatch(changeBannersAction(banners));
  },
  changeRecommends(recommends) {
    dispatch(changeRecommendsAction(recommends));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
