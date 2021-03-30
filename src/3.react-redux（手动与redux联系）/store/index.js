// import * as redux from 'redux';
import { createStore } from 'redux';

import reducer from './reducer';

// const store = redux.createStore(reducer);
const store = createStore(reducer);

export default store;
