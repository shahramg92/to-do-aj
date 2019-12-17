import axios from 'axios';
import { put, delay,takeLatest, all,call } from 'redux-saga/effects';
import * as actions from '../actions/actionCreators';

function* helloSaga() {
  console.log('Hello Sagas!')
}

export const fetchData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts?userId=1");
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

function* getPostsSaga() {
  try {
    const data = yield call(fetchData);
    yield put(actions.getPostSuccess(data))
    console.log(data)
  } catch (error) {
    yield put (actions.getPostFailure())
  }
};

function* watchTypeToListenFor() {
  yield takeLatest(actions.getPostStart, getPostsSaga)
}

export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchTypeToListenFor()
  ])
}