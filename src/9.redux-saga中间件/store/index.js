import { applyMiddleware, createStore, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import saga from './saga';
import reducer from './reducer';

// composeEnhancers函数(redux-devtools)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true}) || compose;

// 创建sagaMiddleware中间件
const sagaMiddleware = createSagaMiddleware();

// 通过applyMiddleware来结合多个Middleware，返回一个enhancer
const enhancer = applyMiddleware(thunkMiddleware, sagaMiddleware);
// 将enhancer作为第二个参数传入到createStore中
// const store = createStore(reducer, enhancer);

// redux-devtools
const store = createStore(reducer, composeEnhancers(enhancer));

sagaMiddleware.run(saga);

export default store;
