import axios from 'axios';
import { put, call,takeLatest } from 'redux-saga/effects';
import * as actions from '../actions/actionCreators';

export default function* watchTypeToListenFor() {
  yield takeLatest(actions.getPostStart, getPostsSaga)
}

export function* getPostsSaga() {
  try {
    const response = yield axios.get(
      "https://jsonplaceholder.typicode.com/posts?userId=1"
    )
    yield put(actions.getPostSuccess(response))
  } catch (error) {
    yield put (actions.getPostFailure())
  }
};
