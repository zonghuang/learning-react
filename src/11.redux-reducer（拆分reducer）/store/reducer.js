import { reducer as counterReducer } from './counter';
import { reducer as homeReducer } from './home';

import { combineReducers } from 'redux';

// 手动封装合并
/*
function reducer(state = {}, action) {
  return {
    counterInfo: counterReducer(state.counterInfo, action),
    homeInfo: homeReducer(state.homeInfo, action)
  }
}
*/

// 使用redux官方的封装合并
const reducer = combineReducers({
  counterInfo: counterReducer,
  homeInfo: homeReducer
})

export default reducer;
