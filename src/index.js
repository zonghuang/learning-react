import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

// 5.
// import store from "./5.react-redux（react-redux-connect）/store";
// import { StoreContext } from "./5.react-redux（react-redux-connect）/utils/context";

// 6.
import { Provider } from "react-redux";
// import store from "./6.react-redux（react-redux-connect）Provider/store";

// 7.
// import store from "./7.react-redux（react-redux-异步请求）/store";

// 8.
// import store from "./8.redux-thunk中间件/store";

// 9.
// import store from './9.redux-saga中间件/store';

// 11.
import store from './11.redux-reducer（拆分reducer）/store';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// 5.
// ReactDOM.render(
//   <StoreContext.Provider value={store}>
//     <App />
//   </StoreContext.Provider>,
//   document.getElementById('root')
// );

// 6.
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
