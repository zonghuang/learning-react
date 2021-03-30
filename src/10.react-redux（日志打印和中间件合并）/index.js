import store from "./store/index.js";

import { addAction, subAction } from "./store/actionCreators.js";

// 1.基本做法
/*
console.log("dispatch前---dispatching action:", addAction(10));
store.dispatch(addAction(10));
console.log("dispatch后---new state:", store.getState());

console.log("dispatch前---dispatching action:", addAction(15));
store.dispatch(addAction(15));
console.log("dispatch后---new state:", store.getState());
*/

// 2.封装一个函数
/*
function dispatchAndLogging(action) {
  console.log("dispatch前---dispatching action:", action);
  store.dispatch(action);
  console.log("dispatch后---new state:", store.getState());
}

dispatchAndLogging(addAction(10));
dispatchAndLogging(addAction(5));
*/

// 3.在函数的基础之上进行优化，修改原有的dispatch
// hack技术：monkeyingpatch
/*
const next = store.dispatch;
function dispatchAndLogging(action) {
  console.log("dispatch前---dispatching action:", action);
  next(action);
  console.log("dispatch后---new state:", store.getState());
}
store.dispatch = dispatchAndLogging;

store.dispatch(addAction(10));
store.dispatch(addAction(5));
*/

// 4.将之前的操作进行封装（封装patchLogging）
/*
export function patchLogging(store) {
  const next = store.dispatch;
  function dispatchAndLogging(action) {
    console.log("dispatch前---dispatching action:", action);
    next(action);
    console.log("dispatch后---new state:", store.getState());
  }
  store.dispatch = dispatchAndLogging;
  // return dispatchAndLogging;
}

// 外部调用的时候，上面export，下面是外部的使用代码（不属于本文件）
patchLogging(store);
store.dispatch(addAction(10));
store.dispatch(addAction(5));
*/

// 5.在4的基础上，结合thunk使用
/*
function patchLogging(store) {
  const next = store.dispatch;
  function dispatchAndLogging(action) {
    console.log("dispatch前---dispatching action:", action);
    next(action);
    console.log("dispatch后---new state:", store.getState());
  }
  store.dispatch = dispatchAndLogging;
}

function patchThunk(store) {
  const next = store.dispatch;
  function dispatchAndThunk(action) {
    if (typeof action === 'function') {
      action(store.dispatch, store.getState)
    } else {
      next(action);
    }
  }
  store.dispatch = dispatchAndThunk;
}

patchLogging(store);
patchThunk(store);
store.dispatch(addAction(10));
store.dispatch(addAction(5));

function foo(dispatch, getState) {
  // console.log(dispatch, getState);
  dispatch(subAction(20));
}
store.dispatch(foo);
*/

// 6.在5的基础上使用中间件
function patchLogging(store) {
  const next = store.dispatch;
  function dispatchAndLogging(action) {
    console.log("dispatch前---dispatching action:", action);
    next(action);
    console.log("dispatch后---new state:", store.getState());
  }
  // applyMiddlewares函数中转换，这里不需要了
  // store.dispatch = dispatchAndLogging;
  return dispatchAndLogging;
}

function patchThunk(store) {
  const next = store.dispatch;
  function dispatchAndThunk(action) {
    if (typeof action === 'function') {
      action(store.dispatch, store.getState)
    } else {
      next(action);
    }
  }
  // applyMiddlewares函数中转换，这里不需要了
  // store.dispatch = dispatchAndThunk;
  return dispatchAndThunk;
}

patchLogging(store);
patchThunk(store);
store.dispatch(addAction(10));
store.dispatch(addAction(5));

function foo(dispatch, getState) {
  // console.log(dispatch, getState);
  dispatch(subAction(20));
}
store.dispatch(foo);

// 封装applyMiddleware
function applyMiddlewares(...middlewares) {
  // const newMiddleware = [...middlewares];
  middlewares.forEach(middleware => {
    store.dispatch = middleware(store);
  })
  // store.dispatch发生了修改，不是纯函数了，需要返回一个新的store，在另外的地方使用新的store
  // return store;
}

applyMiddlewares(patchLogging, patchThunk);
