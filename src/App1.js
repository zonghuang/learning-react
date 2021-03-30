import React, { Component } from "react";
import { renderRoutes } from 'react-router-config';
import { NavLink, withRouter } from "react-router-dom";

import routes from './router';

import "./App.css";

class App extends Component {
  render() {
    const id = '123';
    const info = {name: "why", age: 18, height: 1.88};

    return (
      <div>
        <NavLink exact to="/" activeClassName="link-active">首页</NavLink>
        <NavLink to="/about" activeClassName="link-active">关于</NavLink>
        <NavLink to="/profile" activeClassName="link-active">我的</NavLink>
        <NavLink to="/user" activeClassName="link-active">用户</NavLink>

        <button onClick={e => this.jumpToProduct()}>商品</button>

        <NavLink to={`/detail/${id}`} activeClassName="link-active">详情</NavLink>
        <NavLink to={`/detail2?name=why%age=18`} activeClassName="link-active">详情2</NavLink>
        <NavLink to={{
                    pathname: "/detail3",
                    search: "name=abc",
                    state: info
                  }}
                  activeClassName="link-active">
        详情3
        </NavLink>

        {renderRoutes(routes)}

      </div>
    );
  }

  jumpToProduct() {
    this.props.history.push("/product");
  }
}

export default withRouter(App);
