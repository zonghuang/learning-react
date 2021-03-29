import React, { PureComponent } from 'react';

import styles from './home.module.css';

export default class Home extends PureComponent {
  render() {
    return (
      <div className="home">
        <h2 className={styles.title}>我是Home标题</h2>
        <span className={styles.desc}>我是Home中的span段落</span>
      </div>
    )
  }
}
