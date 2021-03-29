import React, { PureComponent } from 'react';

import Home from './home';

import styles from './app.module.css';

export default class App extends PureComponent {
  render() {
    return (
      <div className="app">
        <h2 className={styles.title}>我是App的标题</h2>
        <p className={styles.desc}>我是App中的一段文字描述</p>
        <Home/>
      </div>
    )
  }
}
