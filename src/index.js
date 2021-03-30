import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// import App from './App';
import App from './App1';


ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <BrowserRouter>
  <App />
  </BrowserRouter>,
  document.getElementById('root')
);
