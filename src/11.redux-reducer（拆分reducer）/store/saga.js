import { takeEvery, put, all, takeLatest } from "redux-saga/effects";
import axios from "axios";

import { FETCH_HOME_MULTIDATA } from "./home/constants";
import { changeBannersAction, changeRecommendsAction } from "./home/actionCreators";

function* fetchHomeMutidata(action) {
  const res = yield axios.get("http://123.207.32.32:8000/home/multidata");
  console.log(res);
  const data = res.data.data;
  yield all([
    put(changeBannersAction(data.banner.list)),
    put(changeRecommendsAction(data.recommend.list)),
  ]);
}

function* mySaga() {
  // takeLatest takeEvery区别:
  // takeLatest: 依次只能监听一个对应的action
  // takeEvery: 每一个都会被执行
  // yield takeEvery(FETCH_HOME_MULTIDATA, fetchHomeMutidata),

  yield all([
    takeEvery(FETCH_HOME_MULTIDATA, fetchHomeMutidata),
    // takeLatest(ADD_NUMBER, fetchHomeMultidata),
  ]);
}

export default mySaga;
