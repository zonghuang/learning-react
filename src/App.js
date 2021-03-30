import React, { Component } from "react";

import { BrowserRouter, Route, Link, NavLink, Switch, withRouter } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Profile from "./pages/profile";
import User from "./pages/user";
import NoMatch from "./pages/nomatch";
import Login from "./pages/login";
import Detail from "./pages/detail";
import Detail2 from "./pages/detail2";
import Detail3 from "./pages/detail3";
import Product from "./pages/product";

import "./App.css";

class App extends Component {
  render() {
    const id = '123';
    const info = {name: "why", age: 18, height: 1.88};

    return (
      // <BrowserRouter>...</BrowserRouter>
      <div>
        {/* 1.Link的使用 */}
        {/* <Link to="/">首页</Link>
        <Link to="/about">关于</Link>
        <Link to="/profile">我的</Link> */}
        
        {/* 2.NavLink的使用 */}
        {/* <NavLink exact to="/" activeStyle={{color: "red", fontSize: "30px"}}>首页</NavLink>
        <NavLink to="/about" activeStyle={{color: "red", fontSize: "30px"}}>关于</NavLink>
        <NavLink to="/profile" activeStyle={{color: "red", fontSize: "30px"}}>我的</NavLink>  */}
        
        <NavLink exact to="/" activeClassName="link-active">首页</NavLink>
        <NavLink to="/about" activeClassName="link-active">关于</NavLink>
        <NavLink to="/profile" activeClassName="link-active">我的</NavLink>
        <NavLink to="/user" activeClassName="link-active">用户</NavLink>

        {/* 为了获取到相关的路由信息，把外层的 BrowserRouter标签 换成div，然后到index中把那里的 <React.StrictMode> 换成 <BrowserRouter> 标签 */}
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

        {/* Switch的作用 */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/profile" component={Profile} />
          <Route path="/user" component={User} />
          <Route path="/login" component={Login} />
          <Route path="/product" component={Product} />
          <Route path="/detail/:id" component={Detail} />
          <Route path="/detail2" component={Detail2} />
          <Route path="/detail3" component={Detail3} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }

  jumpToProduct() {
    this.props.history.push("/product");
  }
}

export default withRouter(App);
