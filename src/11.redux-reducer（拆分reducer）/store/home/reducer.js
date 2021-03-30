import {
  CHANGE_BANNER,
  CHANGE_RECOMMEND
} from './constants';

const initialHomeState = {
  banners: [],
  recommends: []
}

function homeReducer(state = initialHomeState, action) {
  switch (action.type) {
    case CHANGE_BANNER:
      return { ...state, banners: action.banners };
      case CHANGE_RECOMMEND:
        return { ...state, recommends: action.recommends };
    default:
      return state;
  }
}

export default homeReducer;
