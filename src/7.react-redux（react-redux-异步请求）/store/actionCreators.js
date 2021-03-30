import {
  ADD_NUMBER,
  SUB_NUMBER,
  INCREMENT,
  DECREMENT,

  CHANGE_BANNER,
  CHANGE_RECOMMEND
} from './constants';

// export function addAction(num) {
//   return {
//     type: "ADD_NUMBER",
//     num
//   }
// }

// export const addAction = (num) => {
//   return {
//     type: "ADD_NUMBER",
//     num
//   }
// }

export const addAction = num => ({
  type: ADD_NUMBER,
  num
});

export const subAction = num => ({
  type: SUB_NUMBER,
  num
});

export const incAction = () => ({
  type: INCREMENT
});

export const decAction = () => ({
  type: DECREMENT
});

export const changeBannersAction = (banners) => ({
  type: CHANGE_BANNER,
  banners
})

export const changeRecommendsAction = (recommends) => ({
  type: CHANGE_RECOMMEND,
  recommends
})
