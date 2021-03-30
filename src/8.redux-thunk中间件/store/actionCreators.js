import axios from 'axios';

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

// getState参数：store里面的getState，传过来的目的是：
// 如果你这次网络请求，依赖原来redux里面的某个数据，就可以通过getState拿到state，去获取相关的数据（比如分页）
export const getHomeMultidataAction = (dispatch, getState) => {
  axios({
    url: "http://123.207.32.32:8000/home/multidata",
  }).then(res => {
    const data = res.data.data;
    dispatch(changeBannersAction(data.banner.list));
    dispatch(changeRecommendsAction(data.recommend.list));
  })
}