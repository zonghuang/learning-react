import React from 'react';
import ReactDOM from 'react-dom';

// import App from './1.内联样式/app';
// import App from './2.普通的css/app';
// import App from './3.css modules/app';
import Home from './4.styled-components/app'

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);
